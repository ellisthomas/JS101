//1. How many hours are in a year

var daysInYear = 365 * 24;
console.log( "Hours in Year:", hoursInYear);


//2. How many minutes are in a decade

var minutesInAnHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
console.log(minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade);


//3. How many seconds old they are

 var personAgeInYears = 27;
 var secondsPerMinute = 60;
 var secondsOld = personAgeInYears * daysPerYear * hoursPerDay *minutesPerHour * secondsPerMinute;
 console.log("how many seconds old", personAgeInYears * daysPerYear * hoursPerDay *minutesPerHour * secondsPerMinute);

if (personAgeInYears > 80){
	console/log("I'm old");
} else {
	console.log("Im young");
}




//4. If they are older than some arbitrary number, console "I'm old", else "I'm young" (