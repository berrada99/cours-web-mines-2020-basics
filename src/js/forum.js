import ky from "ky";
import $ from "jquery";

function getMessageView(message) {
  return `<div class="card-my3>
  <div class="card-body">
    <p class = "card-text">${message.content}</p>
  </div>
  <div class="card-footer text-muted text-right">
    <p>${message.username}<p/>
    <p>${message.message}</p>
  </div>
  </div>`;
}

function displayMessages(messages) {
  // Clear list content on view
  // Iterate on messages and display getMessageView(message);
  const $messageContainer = $(".messages-container");
}

async function refreshMessages() {
  // GET https://ensmn.herokuapp.com/messages
  const messages = await ky.get("https://ensmn.herokuapp.com/messages").json();
  displayMessages(messages);
}

resfreshMessages();
// setInterval(() => {
//   refreshMessages();
// }, 1000);

// function sendMessage(message) {
//   // POST https://ensmn.herokuapp.com/messages (username, message)
//   // After success, getMessages()
// }
