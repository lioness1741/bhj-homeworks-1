const popup = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

popup.classList.add("modal_active");

modalClose.addEventListener("click", () => {
   popup.classList.remove("modal_active");
  document.cookie = "popup" + " = " + encodeURIComponent("closed");
});

function closePopup() {
const value = "; " + document.cookie;
  const parts = value.split("; popup=");
  if (parts.length === 2) {
    popup.classList.remove("modal_active");
  }
}