function setup(){
    createCanvas(600, 400);
    background(250, 250, 100);
}

function draw(){
    noStroke();
    fill(250, 200, 200, 250);
    ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed(){
    background(250, 250, 100);
}

