let timerDisplay = document.getElementById('timer');

setInterval(function() {
    let currentDate = new Date();
    timerDisplay.innerHTML = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
}, 1000);