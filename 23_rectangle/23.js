let rectangle = document.querySelector(".rectangle");
let button = document.getElementById("toggle-rectangle");
button.addEventListener("click", clickButton);
let stock = "coco";
function clickButton() {
    rectangle.classList.toggle("hide")
}
rectangle.addEventListener("mouseover", mouseOver); rectangle.addEventListener("mouseout");
function mouseOver(){
    rectangle.classList.toggle("important");
}
function mouseOut(){
    rectangle.classList.remove("important");
}
