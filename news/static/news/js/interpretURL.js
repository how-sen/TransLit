
function progress(timeleft, timetotal, $element) {
  console.log(timeleft);
  var progressBarWidth = timeleft * $element.width() / timetotal;
  console.log(Math.floor(timeleft/3600) + ":"+  Math.floor(timeleft / 60 % 60) + ":"+ timeleft%60);
  var minutes = Math.floor(timeleft / 60 % 60)
  var seconds = timeleft%60
  if (minutes == 0) {
    minutes = "";
  } else {
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    minutes += " minutes, "
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  $element.find('div').animate({ width: progressBarWidth }, 500).html(minutes + seconds + " seconds");
  if (timeleft == 60) {
    alert("Only a minute left!");
  }
  if(timeleft > 0) {
      setTimeout(function() {
          progress(timeleft - 1, timetotal, $element);
      }, 1000);
  } else {
    alert("We calculate that you should've just arrived!")
    $element.hide();
  }
};
var components = window.location.href.split("?");
if (components.length > 2) {
  var progressBar = document.createElement('div');
  progressBar.setAttribute('id', 'progressBar');
  var div = document.createElement('div');
  progressBar.append(div);
  $("body").append(progressBar);
  var countDownDate = Date.parse(components[1] +  " " + components[2].replace("%20", " "));
  console.log(components[1] +  " " + components[2].replace("%20", " "));
  var now = new Date().getTime();
  var distance = Math.floor((countDownDate - now)/1000);
  progress(distance, distance, $('#progressBar'));
}
