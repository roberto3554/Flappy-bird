class Pipe{
  constructor(x, y, l1, l2){
    this.x = x;
    this.y = y;
    this.l1 = l1;
    this.l2 = l2;
  }

  show(){
    fill(153, 217, 140);
    stroke(82, 182, 154);
    strokeWeight(4);

    rect(this.x, -50, this.l1, this.y);
    rect(this.x-5, this.y-60 , this.l1+10, 10);

    rect(this.x, this.y+100, this.l1, height-this.l2+50);
    rect(this.x-5, this.y+100 , this.l1+10, 10);
  }

  update(){
    this.x -= 2;
  }
}