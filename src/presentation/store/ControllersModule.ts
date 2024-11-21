import { createQuizController } from "@/presentation/controllers/QuizController";

export default {
  state: {
    quizController: null,
  },
  mutations: {
    setController(state, { name, controller }) {
      state[name] = controller;
    },
  },
  actions: {
    initializeControllers({ commit }) {
      const controllers = [
        { name: "quizController", controller: createQuizController() },
      ];

      controllers.forEach(({ name, controller }) => {
        commit("setController", { name, controller });
      });
    },
  },
};
