const socket = io();
const msgerForm = document.querySelector(".msger-form"); 
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");
const userId = Math.floor(Math.random() * 10000);

const user1_NAME = "";
const user2_NAME = "";
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  socket.emit('chat message',  {userId,msgText});
  msgerInput.value = "";
});

socket.on('chat message', function (data) {
    if (data.userId === userId) {
        appendMessage(user1_NAME,"right", data.msgText);
      } else {
        appendMessage(user2_NAME,"left", data.msgText);
      }    
});

function appendMessage(name, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}



function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

