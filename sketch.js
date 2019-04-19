//variables for horizontal position and diameter of ellipse
var xPos = 0;
var diam1 = 50;
var y = 75;
var y2 = 20;

function setup() {
  // put setup code here
  createCanvas(700,500); 
    
}

function draw() {
    background("black");
    //add colors for fill and stroke
    fill("red");
    stroke("#FFFFFF");
    strokeWeight(20);
    square(xPos, height/3, diam1, diam1);
    //increase the value of xPos so it moves
    xPos = xPos + 20;
    //set up xPos back to 0
    if(xPos >= width){
        xPos = random(200);   
    }
    textSize(30);
    noStroke();
    text("The Angry Square", 200, 80); 
    fill("green")
    
    text("And The Friendly Rectangle", 200, 450);
     //add colors for fill and stroke
    fill("green");
    stroke("green");
    //x,y,x2,y2,x3,y3
    //triangle(30, 75, 58, 20, 86, 75);
     triangle(50, y, 100, y2, 64, y);
    y = y+1;
    y2 = y2 + 1;
    if (y >= height){
        y = 200;
        y2 = 20;
    }
}

function mousePressed(){
    diam1 = diam1 + 60;
    if (diam1 >= height){
        diam1 = 60;
    }
}