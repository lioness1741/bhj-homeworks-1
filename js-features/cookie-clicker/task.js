const clickerCounter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
const clickTime = Date.now();

cookie.addEventListener("click", (element) => {
  const maxCount = parseInt(clickerCounter.textContent);
  clickerCounter.textContent = maxCount + 1;
  speed.textContent = (1000 / (Date.now() - clickTime)).toFixed(2);
  clickTime = Date.now();
  if (maxCount % 2 === 0) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }
});


/* 
const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = () => {
  const maxCount = parseFloat(clickerCounter.textContent);
  clickerCounter.textContent = maxCount + 1;
   if (maxCount % 2 === 0) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }
} */