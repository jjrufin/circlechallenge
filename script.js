var radInput = document.getElementById('radiusInput');
var radius = radInput.value;
var area;
var circle = document.getElementById('circle');

// Button calculation
function calculate() {
  var radius = radInput.value;
area = (radius * radius)*3.14159;
console.log(area);

var theAreaIs = document.getElementById('output');

theAreaIs.innerText = "The area is "+area;

drawCircle(radius);




}
function drawCircle (radius){
  var radius = radInput.value;
  var circle = document.getElementById('circle');
  var diameterString = (radInput.value * 2) + "px";
  circle.style.width = diameterString;
  circle.style.height = diameterString;
  circle.style.background = "red";


        circle.style.mozBorderRadius = radius + "px";
        circle.style.webkitBorderRadius = radius + "px";
        circle.style.borderRadius = radius + "px";

circle.style.animation = "fadein 2s";



}


//Circle drawing
// function drawCircle (){
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var radius = radInput.value;
// ctx.beginPath();
// ctx.arc(100, 100, radius, 0, 2 * Math.PI);
// ctx.stroke();
// }
