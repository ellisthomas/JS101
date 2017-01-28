var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;

var indexOfOrphans = sonnet.indexOf("orphans");

alert("There are " + sonnet.length +" characters in this sonnet");

var textreplace = sonnet.replace("winter","yuletide");

var globalreplace = sonnet.replace(/the /g," a large");

element.innerHTML = globalreplace;