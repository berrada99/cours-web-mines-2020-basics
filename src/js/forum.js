import ky from "ky";

function getMessageView(message) {
  return `<div class="card-my3>
    <p>${message.username}<p/>
    <p>${message.message}</p>
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

setInterval(() => {
  refreshMessages();
}, 1000);

// function sendMessage(message) {
//   // POST https://ensmn.herokuapp.com/messages (username, message)
//   // After success, getMessages()
// }
