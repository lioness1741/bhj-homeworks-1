const interestsMain = document.querySelector(".interests_main");

interestsMain.addEventListener("change", (event) => {
  let checkbox = event.target; 
  if (!checkbox.closest(".interests_active")) {
    let boxChild = checkbox.closest(".interest").querySelector(".interests_active"); 
    const inputs = [...boxChild.querySelectorAll(".interest__check")]; 

    inputs.forEach(item => {    
      if (checkbox.checked === true) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  }
});