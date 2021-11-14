var start = new Date();
var startTime = start.getTime();

function stopTime()
{
  var stop = new Date();
  var currentTime = stop.getTime();
  var totalSeconds = (currentTime - startTime)/600;
  alert("You have been on this page for " + totalSeconds + " seconds");
}
