//your JS code here. If required.
  const timer = document.getElementById("timer");
  const now = new Date(); // abhi ka date-time lo

  // Date aur time ko readable format me convert karo
  const dateStr = now.toLocaleDateString(); 
  const timeStr = now.toLocaleTimeString();

  timer.textContent = dateStr + " " + timeStr;