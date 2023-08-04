function countdown() {
    // Get current time.
    var currentTime = new Date().getTime();
  
    // Get end time.
    var endTimeDate = new Date("2 March 2024").toLocaleString('en-uk', {day:"numeric", month:"long", year:"numeric"});
    var endTime = new Date("2 March 2024").getTime();
  
    // Calculate time remaining.
    var timeRemaining = endTime - currentTime;

    // Get current minutes to refresh.
    var currentMins = new Date().getMinutes;

    // Separate the time remaining into months, days, hours, and minutes.
    var months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24) - months * 30);
    var hours = Math.floor(timeRemaining / (1000 * 60 * 60) - months * 30 * 24 - days * 24);
    mins = Math.floor(timeRemaining / (1000 * 60) - months * 30 * 24 * 60 - days * 24 * 60 - hours * 60)

    // Display the time remaining.
    document.getElementById("timer").innerHTML =
      "<b>" + months + "</b> months <b>" + days + "</b> days <b>" + hours + "</b> hours <b>" + mins + "</b> mins to <b>" + endTimeDate + "</b>";
    
      

      // When March 2 2024, stop the timer.
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
      }

      // If the current min is 00, refresh the timer.
      if (currentMins == 0) {
        timerInterval = setInterval(countdown, 0);
    }
}

  var timerInterval = setTimeout(countdown, 0)
  timerInterval = setInterval(countdown, 60000);