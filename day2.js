// // switch statement

// var day = "Friday";

// switch(day){
// 	case "Monday":
// 	console.log("Boooooo");
// 	case "Friday":
// 	console.log("PARTY")
// 	break;
// 	default:
// 	console.log("not monday")
// }

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(" cats ")
console.log("fruitString", fruitString);


var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);


var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9,6,8,2,4,11,66];  
var numSort = nums.sort(function(a,b) {
	return a-b;
}
);
console.log("numSort", numSort);

var mixedCrap = ["r", "m", 33,9];
console.log("????", mixedCrap.sort());

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("bananas index", fruit.indexOf("bananas"));

var animals2 = animals.slice(2,4);
console.log("animals2", animals2);

animals.splice(1, 1);
console.log("no turtles", animals);


// sort revers make a string
var colors = ["red", "blue", "gold", "pink", "orange"];

var finalAnswer = colors.sort().reverse().join(" cat ");
console.log("finalAnswer", finalAnswer);



































