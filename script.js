function updateTimer() {
  const timer = document.getElementById("timer");
  const now = new Date(); // abhi ka date-time lo

  // Date aur time ko readable format me convert karo
  const dateStr = now.toLocaleDateString(); 
  const timeStr = now.toLocaleTimeString();

  timer.textContent = dateStr + " " + timeStr;
}

// har 1 sec me updateTimer function call hoga
setInterval(updateTimer, 1000);

// page load hote hi turant show ho jaye
updateTimer();