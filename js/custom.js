/*-- var num1 =20;
var num2 = 10;
if (num1 > num2)
{
    document.getElementById("one").innerHTML = "bella hossen apon";
    document.getElementById("one").style.color = "red";
    document.getElementById("one").style.fontSize = "40px";
}
else if(num1 == num2)
{
    document.getElementById("one").innerHTML = "md. apon khan";
    document.getElementById("one").style.color = "yellow";
    document.getElementById("one").style.fontSize = "40px";
}
else
{
    document.getElementById("one").innerHTML = "apon hossen bellal";
    document.getElementById("one").style.color = "blue";
    document.getElementById("one").style.fontSize = "40px";
} --*/

// if else

var age = 30;
var gender = "male";

if (age >= 18 && gender == "male") 
{
    document.getElementById("two").innerHTML = "allowed bellal hossen";
    document.getElementById("two").style.background = "blue";
    document.getElementById("two").style.fontSize = "40px";
}
else if(age >= 24 && gender == "female")
{
    document.getElementById("two").innerHTML = "allowed bellal hossen";
    document.getElementById("two").style.background = "yellow";
    document.getElementById("two").style.fontSize = "40px";
}

else
{
    document.getElementById("two").innerHTML = "not allowed bellal hossen";
    document.getElementById("two").style.background = "red";
    document.getElementById("two").style.fontSize = "40px";
}

// switch case

var day = 2;
switch(day)
{
    case 2:
    document.getElementById("three").innerHTML= "today is sunday";
    document.getElementById("three").style.background = "red";
    document.getElementById("three").style.fontSize = "40px";
    break;

    case 3:
    document.getElementById("three").innerHTML= "today is monday";
    document.getElementById("three").style.background = "green";
    document.getElementById("three").style.fontSize = "40px";
    break;

    default:
        document.getElementById("three").innerHTML="enter day hear 1-7";
        document.getElementById("three").style.background = "pink";
        document.getElementById("three").style.fontSize = "40px";
}

// loop

// for
for(i=1; i<=10; i++) 
{
    document.write(i + "<br>")
};

// while 
var age= 21;
while (age<=25) 
{
    document.write(age+ "<br>");
    age++;
}

// do while
var apon = 31;
do{
    document.write(apon+ "<br>");
    apon++;
}
while (apon<=50);

// array
var car = ['bellal', 'apon', 'kamal', 'DIPU', 'bellal', 'apon', 'kamal', 'DIPU'];
var totalCars = car.length;
var lastIndex = totalCars - 1;
for(i = 0; i <= lastIndex; i++){
    document.write(car[i] + "<br>");
}

document.getElementById("four").innerHTML= car;
document.getElementById("five").innerHTML= car[3];
document.getElementById("six").innerHTML= totalCars;

// object
var motorcicly = {
    brand: 'appacy', 
    model: 'fz-3', 
    vesiion:'3'
}
document.getElementById("eight").innerHTML = motorcicly.brand + motorcicly.model;
    