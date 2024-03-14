
//Q1

var x = prompt("Enter the city name");
 if (x === "karachi") {
   document.write("Welcome to city of lights ");
 
  }


//Q2



var Gender = prompt("Enter the Gender")
if(Gender === "male"){
    document.write("Good Morning Sir")
}

if(Gender === "female"){
    document.write("Good Morning Ma'am")
}


//Q3

var signalcolor= prompt("Enter Signsl Color (Red, Yellow, Green)")

if(signalcolor === "Red"){
    document.write("Must Stop")
}


 if(signalcolor === "Yellow"){
    document.write("Ready to move")
}


 if(signalcolor === "Green"){
    document.write("Move now")
}
else{  
    document.write("You can enter only Three Color (Red, Yellow,Green ) and 1st letter in Capital")
}


//Q3 using if else


var signalcolor= prompt("Enter Signsl Color (Red, Yellow, Green)")

if(signalcolor === "Red"){
    document.write("Must Stop")
}


else if(signalcolor === "Yellow"){
    document.write("Ready to move")
}


 else if(signalcolor === "Green"){
    document.write("Move now")
}
else{  
    document.write("You can enter only Three Color (Red, Yellow,Green ) and 1st letter in Capital")
}





//Q4

var fuel= prompt("Enter Your Remaining Fuel")

if(fuel < 0.25){
    document.write("Please refill the fuel in your car")
}


//Q5


//part a


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//part b


var b = 82;
if (++b === 83){
alert("given condition for variable b is true");
}

//part c 


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


//partd


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


//part e
 
var car=5
var cat=10

if("car" < "cat"){
    alert("car is smaller than cat");
    }