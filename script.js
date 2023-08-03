var colors = ["Blue", "Green", "Red", "Orange"];

var btn = document.getElementById("btn");
var index = 0;

function changeColor()
{
    if (index > 3) index =0;
    document.body.style.backgroundColor =colors[index];
    index = index + 1;
}