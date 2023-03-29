const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach((element) => {
  let menuSub = element.closest(".menu__item").querySelector(".menu_sub");
  if (menuSub === false) {
    return;
  }

  element.onclick = function () {
    menuSub.className = "menu menu_sub menu_active";
    return false;
  };
});
