function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`${tab}-tab`).classList.add('active');
}

async function lookupUser() {
  const userId = document.getElementById("userInput").value;
  // You must set up a backend proxy or secure server-side call to the Discord API
  document.getElementById("userResult").textContent = "User lookup requires bot backend!";
}

async function lookupServer() {
  const serverId = document.getElementById("serverInput").value;
  // Same here, requires backend with bot token
  document.getElementById("serverResult").textContent = "Server lookup requires bot backend!";
}
