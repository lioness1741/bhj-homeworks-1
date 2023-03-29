const modal = document.getElementById("modal_main");
const modalClose = document.querySelectorAll(".modal__close");
const modalSuccess = document.getElementById("modal_success");

modal.className = "modal modal_active";
modalClose.forEach(
  (element) =>
    (element.onclick = function () {
      if (element.className === "show-success") {
        modal.className = "modal";
        modalSuccess.className = "modal";
      } else {
        modal.className = "modal";
        modalSuccess.className = "modal_success";
      }
    })
);
