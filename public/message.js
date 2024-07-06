document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/env');
    const data = await response.json();
    document.getElementById('envMessageTest').innerText = data.message;
});
