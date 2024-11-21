import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default class SwalNotification {
  success(message: string, confirmButtonText: string) {
    Swal.fire({
      text: message,
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: confirmButtonText,
      customClass: {
        confirmButton: "btn fw-bold btn-light-primary",
      },
    });
  }

  error(message: string, confirmButtonText: string) {
    Swal.fire({
      text: message,
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: confirmButtonText,
      customClass: {
        confirmButton: "btn fw-bold btn-light-primary",
      },
    });
  }

  withButtons(
    title: string,
    message: string,
    confirmButtonText: string,
    cancelButtonText: string
  ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    return swalWithBootstrapButtons.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: true,
    });
  }
}
