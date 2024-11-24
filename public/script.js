let currentUser = null;
let messages = [];

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    if (username) {
        currentUser = username;
        document.getElementById("login").style.display = "none";
        document.getElementById("chat").style.display = "block";
        document.getElementById("user-label").innerText = `Connecté en tant que ${username}`;
        loadMessages();
    }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    currentUser = null;
    document.getElementById("chat").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("username").value = "";
});

document.getElementById("sendMessageBtn").addEventListener("click", () => {
    const message = document.getElementById("messageInput").value.trim();
    if (message && currentUser) {
        messages.push({
            sender: currentUser,
            content: message,
            timestamp: Date.now(),
        });
        document.getElementById("messageInput").value = "";
        loadMessages();
        cleanOldMessages();
    }
});

function loadMessages() {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = messages
        .map(msg => `<p><strong>${msg.sender}:</strong> ${msg.content}</p>`)
        .join("");
}

function cleanOldMessages() {
    const now = Date.now();
    messages = messages.filter(msg => now - msg.timestamp < 30 * 60 * 1000);
}
