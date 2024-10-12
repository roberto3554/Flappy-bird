class Mont{
  constructor(x, scl){
    this.x = x;
    this.scl = scl;
  }

  show(){
    image(m, this.x, 800-this.scl+this.scl*0.2, this.scl, this.scl);
  }

  update(){
    this.x -=1;
  }
}