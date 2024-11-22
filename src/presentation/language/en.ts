export default {
  pages: {
    start: {
      title: "Welcome!!",
      desc: "Welcome to our competition. This competition consists of 10 questions. You have 30 seconds for each question, but you cannot answer during the first 10 seconds. Press the Start button when you are ready.",
      button: "Start",
    },
    question: {
      secondsRemaining: "seconds remaining.",
      readyForAnswer: "You can now answer the question.",
      waitForAnswer: "Please wait to answer the question.",
      noAnswer: "No Answer",
    },
    result: {
      title: "Quiz Answers",
      question: "Question",
      answer: "Answer",
      retake: "Retake Quiz",
    },
  },
  loading: "Loading...",
  swalMessages: {
    CONFIRM_BUTTON_TEXT: "OK",
    API_ERROR_MESSAGE:
      "Technical error. Unable to connect to the server, please try again.",
    ERROR_CODE: " Error code: ",
    UNKNOWN_ERROR_MESSAGE: "An unknown error occurred.",
    ARE_YOU_SURE: "Are you sure?",
  },
  customErrorMessages: {
    useCase: {
      error: "Usecase error.",
    },
    mapper: {
      error: "Mapper error.",
    },
    controller: {
      error: "Controller error.",
    },
    repository: {
      error: "Repository error.",
    },
  },
};
