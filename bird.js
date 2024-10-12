class Bird{
  constructor(x, y, rad){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.vel = 0;
  }

  show(){
    push();
    translate(this.x, this.y);
    rotate(this.vel*0.05);
    image(pajaro, 0, 0, this.rad, this.rad);
    pop();
  }

  update(){
    if(this.vel<5)
      this.vel += 0.1;
    this.y += this.vel;
  }
}