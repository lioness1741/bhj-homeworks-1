const modal = document.getElementById("modal_main");
const modalClose = document.querySelectorAll(".modal__close");
const modalSuccess = document.getElementById("modal_success");
let arrModalClose = Array.from(modalClose);

modal.className = "modal modal_active";
arrModalClose.forEach(
  (element) =>
    (element.onclick = function () {
      if (element.classList.contains("show-success")) {
        modal.className = "modal";
        modalSuccess.className = "modal modal_active";
      } else {
        modal.className = "modal";
        modalSuccess.className = "modal";
      }
    })
);

