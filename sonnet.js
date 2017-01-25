var element = document.getElementById("sonnet");
console.log(element);
var sonnet = element.innerHTML;

var indexOfOrphans = sonnet.indexOf("orphans");
console.log(indexOfOrphans);

alert("There are " + sonnet.length +" characters in this sonnet");

var textreplace = sonnet.replace("winter","yuletide");
console.log(textreplace);

var globalreplace = sonnet.replace(/the/g,"a large");
console.log(globalreplace);


document.getElementById("sonnet").innerHTML = "When your brain is fried from JavaScript!"
console.log(sonnet);
