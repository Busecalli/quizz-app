<template>
  <div id="app">
    <div v-if="isLoading" class="loading-container">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div
      v-else-if="currentQuestionIndex < quizListModel.length"
      class="d-flex justify-content-center align-items-center vh-100"
    >
      <Question
        :questionIndex="currentQuestionIndex"
        :questionData="quizListModel[currentQuestionIndex]"
        @answered="saveAnswer"
      />
    </div>

    <div v-else class="d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow-lg" style="width: 80%; max-width: 800px;">
        <div class="card-body">
          <h2 class="text-center mb-4">Quiz Answers</h2>
          <table class="table table-bordered table-hover table-striped">
            <thead class="table-primary">
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(answer, index) in answers"
                :key="index"
                :class="{ 'table-danger': answer.answer === 'No Answer' }"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ answer.question }}</td>
                <td :class="answer.answer === 'No Answer' ? 'text-danger fw-bold' : ''">
                  {{ answer.answer }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-center mt-4">
            <button @click="restartQuiz" class="btn btn-primary btn-lg">
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Question from "../components/Question.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import SwalNotification from "../plugins/SwalNotification";
import { SWAL_MESSAGES } from "@/core/constants/SwalMessages";
import { QuizListModel } from "@/domain/quiz-list/model/QuizListModel";

export default defineComponent({
  name: "App",
  components: { Question },
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const quizController = store.state.ControllersModule.quizController;
    const swalNotification = new SwalNotification();
    const quizListModel = ref<QuizListModel[]>([]);
    const isLoading = ref<boolean>(false);
    const currentQuestionIndex = ref(0);
    const answers = ref<{ question: string; answer: string }[]>([]);

    const fetchQuestions = () => {
      isLoading.value = true;
      quizController
        .quizList()
        .then((response) => {
          if (response.isSuccess) {
            response.getValue().forEach((quiz) => {
              quizListModel.value.push(quiz);
            });

            isLoading.value = false;
          } else {
            swalNotification.error(
              response.error.cause.cause +
                t(SWAL_MESSAGES.ERROR.ERROR_CODE) +
                response.error.code +
                response.error.cause.code,
              t(SWAL_MESSAGES.CONFIRM_BUTTON_TEXT)
            );
          }
          quizListModel.value = quizListModel.value.slice(0, 10);
        })
        .catch((e) => {
          swalNotification.error(e, t(SWAL_MESSAGES.CONFIRM_BUTTON_TEXT));
        });
    };

    const saveAnswer = (answer: { question: string; answer: string }) => {
      answers.value.push(answer);
      currentQuestionIndex.value++;
    };

    const restartQuiz = () => {
      answers.value = [];
      currentQuestionIndex.value = 0;
      fetchQuestions();
    };

    onMounted(() => {
      fetchQuestions();
    });

    return {
      currentQuestionIndex,
      answers,
      saveAnswer,
      quizListModel,
      isLoading,
      restartQuiz,
    };
  },
});
</script>

<style lang="scss">
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: rgba(255, 255, 255, 0.9); 
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}
</style>
