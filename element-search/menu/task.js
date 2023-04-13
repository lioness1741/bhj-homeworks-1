const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach((element) => {
  let menuSub = element.closest(".menu__item").querySelector(".menu_sub");
  if (!menuSub) {
    return;
  }

  element.onclick = function () {
    menuSub.classList.toggle("menu_active");
    return false;
  };
});
