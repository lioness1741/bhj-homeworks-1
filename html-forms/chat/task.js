const chat = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const input = document.getElementById("chat-widget__input");

const HH = new Date().getHours();
const mm = new Date().getMinutes();

const phrases = [
    "Добрый день. До свидания.",
    "Кто тут?",
    "Где ваша совесть?",
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "Мы ничего не будем вам продавать.",
    "К сожалению все операторы сейчас заняты. Не пишите нам больше"  
];

const finalMessages= [
  "Я ухожу.",
  "Прощайте.",
  "До свидания",
  "Арриведерчи"
  ];

chat.addEventListener("click", showChat);
 function showChat(event) {
    chat.classList.add('chat-widget_active');
    timer();
}
 
input.addEventListener("change", sendMessages);
  function sendMessages(event) {
   messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${HH}:${mm}</div>
      <div class="message__text">${event.target.value}</div>
    </div>                        `;
  event.target.value = "";
  addRobot(phrases);
  document.querySelector(".chat-widget__messages-container").scrollTo(0, 1000);
  timer();
}

const addRobot = (array) => {
  const index = Math.floor(Math.random() * array.length);
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${HH}:${mm}</div>
      <div class="message__text">
        ${array[index]}
      </div>
    </div>
  `;
  document.querySelector('.chat-widget__messages-container').scrollTo(0, 1000);
   timer();
};

let timerId, counter;
function timer() {
  if (timerId) {
    clearInterval(timerId);
  }
  counter = 0;
  timerId = setInterval(() => {
    counter++;
    console.log(counter);
    if (counter % 30 === 0 && chat.classList.contains('chat-widget_active')) {
      addRobot(finalMessages);      
    }
  }, 1000);
}