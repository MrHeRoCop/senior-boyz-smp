// Set background image
document.getElementById('background').style.backgroundImage = "url('./background.jpg')";

// Set server status and player count
fetch('https://api.mcsrvstat.us/2/mc.hypixel.net')
    .then(response => response.json())
    .then(data => {
        document.getElementById('player-count').innerText = data.players.online + ' players online';
        document.getElementById('server-status').innerText = data.online ? 'Online' : 'Offline';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('player-count').innerText = 'Error: Unable to fetch server status';
        document.getElementById('server-status').innerText = 'Error: Unable to fetch server status';
    });

// Copy IP and Port to clipboard
document.getElementById('copy-ip').addEventListener('click', function() {
    const text = this.getAttribute('data-clipboard-text');
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('IP and Port copied to clipboard!');
});
