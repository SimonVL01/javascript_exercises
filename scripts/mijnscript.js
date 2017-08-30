document.writeln("<p>Dit is JavaScript " + (5 * 8) + "</p>");
document.writeln("En hier nog wat meer.");

console.log("Dit is ook nog wat output.");

//This is a comment

/* This is also a comment */

var i = 5;

var s = "Hello";

var t = "Hello";

var i = 5;

var d = new Date();

var b = d.getHours();

document.writeln("<p>" + (i + 3) + "</p>");
document.writeln(d + b);

d.setFullYear("1995");

alert(d.getFullYear());
var leeftijd = prompt("How old are you");

document.write(berekenLeeftijd(leeftijd, 15, 7));

console.log("Here is the result is", i);

function berekenLeeftijd(i, j, k) {
    return (i + j) * k;
}

var adder = new Function(5, 6, 5 + 6);

