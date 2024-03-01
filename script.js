let circle = document.getElementById("container");
let square = document.getElementById("square");

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
  }

  function changeShape() {
    
    square.style.width = "0";
    square.style.height = "0";
    square.style.borderBottom = "50px solid blue";
    square.style.borderLeft = "25px solid transparent";
    square.style.borderRight = "25px solid transparent";
    square.style.backgroundColor = "transparent"; // Ensure background is transparent before changing shape
    square.style.borderBottom = shapes[shapeIndex].borderBottom;
    square.style.borderLeft = shapes[shapeIndex].borderLeft;
    square.style.borderRight = shapes[shapeIndex].borderRight;

    shapeIndex = (shapeIndex + 1) % shapes.length;
    
  }