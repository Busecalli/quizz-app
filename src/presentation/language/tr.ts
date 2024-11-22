export default {
  pages: {
    start: {
      title: "Hoş geldiniz!!",
      desc: "Yarışmamıza hoş geldiniz. Bu yarışma 10 sorudan oluşmaktadır. Her soru için 30 saniyeniz var fakat ilk 10 saniye cevap veremezsiniz. Hazır olduğunuzda Başla butonuna basınız.",
      button: "Başla",
    },
    question: {
      secondsRemaining: "saniye kaldı.",
      readyForAnswer: "Soruyu şimdi yanıtlayabilirsiniz.",
      waitForAnswer: "Soruyu yanıtlamak için lütfen bekleyiniz.",
      noAnswer: "Cevaplandırılmamış",
    },
    result: {
      title: "Quiz Yanıtları",
      question: "Soru",
      answer: "Cevap",
      retake: "Tekrar Çöz",
    },
  },
  loading: "Yükleniyor...",
  swalMessages: {
    CONFIRM_BUTTON_TEXT: "Tamam",
    API_ERROR_MESSAGE:
      "Teknik hata. Sunucuya bağlanılamıyor, lütfen tekrar deneyiniz.",
    ERROR_CODE: " Hata kodu: ",
    UNKNOWN_ERROR_MESSAGE: "Bilinmeyen bir hata oluştu.",
    ARE_YOU_SURE: "Emin misiniz?",
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
