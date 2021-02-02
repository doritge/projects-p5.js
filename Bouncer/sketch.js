let bouncers = [];
let clicked = false;

function setup() {
  createCanvas(400, 400);
  //background(0);
  
  bouncer1 = new Bouncer(30, 200, 30, color(200, 150));
  bouncer1.setSpeed(2, 2);
  bouncer2 = new Bouncer(width - 30, 200, 30, color(100, 150));
  bouncer2.setSpeed(-2, -2);

  // for (let i = 0; i < 4; i++) {
  //   let r = 30;
  //   let x = random(r, width - r);
  //   let y = random(r, height - r);
  //   bouncers[i] = new Bouncer(x, y, r);
  //   bouncers[i].setSpeed(random(2, 5),random(2, 5));
  // }
  
}

function mouseClicked(){
if (clicked){
    loop();
    clicked = false;
  } else{
    noLoop();
    clicked = true;
  }
}

function draw() {
  background(0);
  
  // fill(200);
  // rect(30,30,200,200);
  textAlign(LEFT);
  textSize(24);
  if (clicked){
    fill(200);
    rect(0, 340, 160, 45, 10, 10);
    noStroke();
    fill(0, 200, 50); 
    text('Click to start!', 10, 370);
  }else{
    fill(200);
    rect(0, 340, 160, 45, 10, 10);
    noStroke();
    fill(200, 0, 50);
    text('Click to stop!', 10, 370);
  }
  
  bouncer1.bounce();
  bouncer1.display();
  bouncer2.bounce();
  bouncer2.display();
  // for(let bouncer of bouncers){
  //   bouncer.bounce();
  //   bouncer.display();
  // }
}

class Bouncer{
  constructor(x, y, r, fColor = null, sColor = null, sWeight = null){
    this.x = x;
    this.y = y;
    this.r = r;
    this.fColor = fColor;
    this.sColor = sColor;
    if(sWeight) this.sWeight = sWeight;
      else this.sWeight = 3;
  }
  
  display(){
    if(this.fColor){
      fill(this.fColor);
    } else{
      noFill();
    }
    
    if(this.sColor){
      stroke(this.sColor);
      strokeWeight(this.sWeight);
    } else{
      noStroke();
    }
    
    ellipse(this.x, this.y, this.r * 2);
  }
  
  jitter(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  setSpeed(x, y){
    this.speedX = x;
    this.speedY = y;
  }

  bounce(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if(this.x < this.r || this.x > width - this.r){
      this.speedX = -this.speedX;
    }
    if(this.y < this.r || this.y > height - this.r){
      this.speedY = -this.speedY;
    }
  }
}