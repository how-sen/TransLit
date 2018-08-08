  function createCountdown(dateString, timeString, dateString1, timeString1) {
    var timer = document.createElement('div');
    $("body").append(timer)
    timer.setAttribute("id","timer");
    var countDownDate = Date.parse(dateString +  " " +timeString);
    // Update the count down every 1 second
    x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="timer"
      document.getElementById("timer").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "SHOULD HAVE ARRIVED";
      }
    }, 1000);
  }
  var components = window.location.href.split("?");
  createCountdown(components[1], components[2].replace("%20", " "), components[3], components[4].replace("%20", " "));
