var colors = ["Blue", "Green", "Red", "Orange"];

var btn = document.getElementById("btn");
var index = 0;

function changeColor()
{
    if (index > 3) index =0;

    document.body.style.backgroundColor =colors[index];
    index = index + 1;
}

let elements = document.querySelectorAll('.slide');
let go = document.querySelector('.right')
let back = document.querySelector('.left')

let currentSlide;
let oldSlide;
let i =0;

function changeIndexGo(){
    oldSlide = elements[i];
    i = i + 1;
    if (i >7) i = 0
    currentSlide = elements[i];
}

go.addEventListener('click', function () {
    changeIndexGo();
    oldSlide.classList.add('hide');
    currentSlide.classList.remove('hide');
});

back.addEventListener('click', function () {
    changeIndexBack();
});