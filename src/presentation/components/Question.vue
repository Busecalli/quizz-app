<template>
  <div class="container mt-5" v-if="currentQuestion">
    <div class="card shadow-lg p-4">
      <h2 class="text-center mb-4">{{ currentQuestion.title }}</h2>
      <div class="mb-4">
        <p class="text-center h5">{{ timer }} seconds remaining</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${timerBarWidth}%`"
            aria-valuenow="timer"
            aria-valuemin="0"
            aria-valuemax="30"
          ></div>
        </div>
      </div>

      <div class="d-flex flex-column">
        <button
          v-for="(option, index) in options"
          :key="index"
          :disabled="isDisabled"
          @click="answerQuestion(option)"
          class="btn btn-outline-primary mb-2"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, onUnmounted } from "vue";

export default defineComponent({
  name: "Question",
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
    questionData: {
      type: Object,
      required: true,
    },
  },
  emits: ["answered"],
  setup(props, { emit }) {
    const timer = ref(30);
    const timerBarWidth = ref(100);
    const isDisabled = ref(true);
    const options = ref<string[]>([]);
      const intervalId = ref<number | null>(null);

    const currentQuestion = ref(props.questionData);

    const generateOptions = (body: string) => {
      const sentences = body.split("\n").slice(0, 4); 
      while (sentences.length < 4) sentences.push("Random Option"); 
      return sentences;
    };

    const clearTimer = () => {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    };

    const answerQuestion = (answer: string) => {
      clearTimer();
      emit("answered", {
        question: currentQuestion.value.title,
        answer,
      });
    };

    const startTimer = () => {
      clearTimer();
      timer.value = 30; 
      timerBarWidth.value = 100;
      isDisabled.value = true;

      intervalId.value = window.setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
          timerBarWidth.value = (timer.value / 30) * 100;
        } else {
          clearTimer();
          emit("answered", {
            question: currentQuestion.value.title,
            answer: "No Answer",
          });
        }

        if (timer.value === 20) isDisabled.value = false;
      }, 1000);
    };

    onMounted(() => {
      options.value = generateOptions(currentQuestion.value.body);
      startTimer();
    });

    watch(
      () => props.questionData,
      (newData) => {
        currentQuestion.value = newData;
        options.value = generateOptions(newData.body);
        startTimer(); 
      }
    );

    onUnmounted(() => {
      clearTimer();
    });

    return {
      currentQuestion,
      timer,
      timerBarWidth,
      options,
      isDisabled,
      answerQuestion,
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.progress-bar {
  background-color: #28a745;
}
</style>