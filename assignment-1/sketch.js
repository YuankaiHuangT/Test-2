let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

let ageInput = prompt("May I ask how old are you?");
let age = Number(ageInput);
let bornAge = 2026-age
alert("In that case, you must have been born around " + bornAge + " ,right?");
let tempFInput = prompt("What's the current temprature in F?");
let tempF = Number(tempFInput);
let tempC = (tempF - 32)*(5/9);
alert("Well, " + tempF + " F would be " + tempC + " in C");
let num1Input = prompt("Please enter an integer value:");
let num1 = Number(num1Input);
let num2Input = prompt("Please enter a second integer value:");
let num2 = Number(num2Input);
alert("Let me show you what I can do with the number " + num1 + " and " + num2 + ":");
let sum = num1 + num2
let minus = num1 - num2
let time = num1 * num2
let divide = num1/num2
let modu = num1%num2
alert(num1 + " + " + num2 + " = " + sum);
alert(num1 + " - " + num2 + " = " + minus);
alert(num1 + " * " + num2 + " = " + time);
alert(num1 + " / " + num2 + " = " + divide);
alert(num1 + " % " + num2 + " = " + modu);
alert("The max of " + num1 + " and " + num2 +  " is " + Math.max(num1,num2))
alert("The min of " + num1 + " and " + num2 +  " is " + Math.min(num1,num2))
if (num1 % 2 === 0) {
  alert(num1 + " is an ENEN number")
} else {
  alert(num1 + " is an ODD number")
}
if (num2 % 2 === 0) {
  alert(num2 + " is an ENEN number")
} else {
  alert(num2 + " is an ODD number")
}
if (num1 > num2){
  alert(num1 + " is greater than" + num2)
}
else if (num2 > num1){
  alert(num2 + " is greater than " + num1)
}
else if (num1 == num2){
  alert("They have the same value")
}
let decimalInput = prompt("Please enter a value with a decimal part:")
let decimal = Number(decimalInput)
let neg = 0 - decimal
let sin = Math.sin(decimal)
let cos = Math.cos(decimal)
let p10 = Math.pow(decimal, 10)
let sqrt = Math.sqrt(decimal)
let round = Math.trunc(decimal)
alert("The negative of " + decimal + " is " + neg)
alert("The sine of " + decimal + " radians is " + sin)
alert("The cosine of " + decimal + " radians is " + cos)
alert(decimal + "^10 = " + p10)
alert("Squre root of " + decimal + " = " + sqrt)
alert("Rounded " + decimal + " = " + round)
let roundToDecimal = prompt("How many decimals to round to?")
let rtd = Number(roundToDecimal)
let rounded = decimal.toFixed(rtd)
alert(decimal + "rounded to " + rtd + " decimal = " + rounded)
let floor = Math.floor(decimal)
let ceiling = Math.ceil(decimal)
let absoluteValue = Math.abs(decimal)
alert("Floor of " + decimal + " is " + floor)
alert("Ceiling of " + decimal + " is " + ceiling)
alert("Absolute value of " + decimal + " is " + absoluteValue)
let fnumberInput = prompt("What's your favorite number?")
let fnumber = Number(fnumberInput)
let square = Math.pow(fnumber, 2)
let cube = Math.pow(fnumber, 3)
alert("Fun fact: " + fnumber + " squared is " + square + " and cube is " + cube + "!")
alert("Thanks for chatting with me, " + name + "! Have a great day!")