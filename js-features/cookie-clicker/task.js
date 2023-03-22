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
}