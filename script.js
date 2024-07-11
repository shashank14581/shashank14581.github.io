document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user_input");
    const chatbox = document.getElementById("chatbox");

    sendButton.addEventListener("click", async function() {
        const user_message = userInput.value.trim();
        if (user_message) {
            addMessageToChatbox("You", user_message);
            const bot_response = await getBotResponse(user_message);
            addMessageToChatbox("Bot", bot_response);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });

    async function getBotResponse(message) {
        // Simple example response
        // You can enhance this with actual machine learning models that can run in the browser
        return `You said: ${message}`;
    }

    function addMessageToChatbox(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<b>${sender}:</b> ${message}`;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});
