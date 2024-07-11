document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user_input");
    const chatbox = document.getElementById("chatbox");

    sendButton.addEventListener("click", function() {
        const user_message = userInput.value.trim();
        if (user_message) {
            addMessageToChatbox("You", user_message);
            getBotResponse(user_message).then(bot_response => {
                addMessageToChatbox("Bot", bot_response);
            });
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });

    async function getBotResponse(message) {
        // Simulate a bot response
        // You can replace this with a call to a machine learning model running in the browser if desired
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`You said: ${message}`);
            }, 1000);
        });
    }

    function addMessageToChatbox(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<b>${sender}:</b> ${message}`;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});
