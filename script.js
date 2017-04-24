var radInput = document.getElementById('radiusInput');
var radius = radInput.value;
var area;
var frame = document.getElementById('frame');
frame.className = "frame";

// Area calculation
function calculate() {
  var radius = radInput.value;
  area = (radius * radius)*3.14159;
  console.log(area);

var theAreaIs = document.getElementById('output');

theAreaIs.innerText = "The area of this circle is "+area;
theAreaIs.className = "theAreaIs";
drawCircle(radius);
}

//Draw the circle
function drawCircle (radius){
  var radius = radInput.value;
  var circle = document.getElementById('circle');
  var diameterString = (radInput.value * 2) + "px";
  circle.style.width = diameterString;
  circle.style.height = diameterString;
  circle.style.color = "white";
  circle.style.borderRadius = radius + "px";
  circle.style.mozBorderRadius = radius + "px";
  circle.style.webkitBorderRadius = radius + "px";
  circle.className = "circle";
  document.getElementById('frame').appendChild(circle);
}
