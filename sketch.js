let b;
let rad = 40;

let p = [];

let pw = 80;
let ph = 200;

let lose = false;

let m;
let pajaro;

let ms = [];

function preload(){
  m = loadImage('montana.png');
  pajaro = loadImage('pajaro.png');
}

function setup(){
  createCanvas(800, 800);
  background(168, 218, 220);
  b = new Bird(40, height*0.5, rad);

  p = [];
  let p1 = new Pipe(width+70, floor(random(60, 650)), pw, ph);
  p.push(p1);

  ms = [];
  let m1 = new Mont(800, random(100, 600));
  ms.push(m1);

  noSmooth();
}

function draw(){
  background(168, 218, 220);

  for(let i=0; i<ms.length; i++){
    ms[i].show();
    ms[i].update();
  }

  if(ms[ms.length-1].x<800-ms[ms.length-1].scl*0.7){
    let m1 = new Mont(800, random(200, 400));
    ms.push(m1);
  }

  if(ms[0].x < -ms[0].scl)
    ms.shift();

  b.show();
  b.update();

  if(b.y<0 || b.y>800){
    noLoop();
    lose = true;
  }
  if(b.x+rad*0.5 >= p[0].x && b.x+rad*0.5 <= p[0].x+pw && (b.y <= p[0].y-50 || b.y+rad >= p[0].y+100)){
    noLoop();
    lose = true;
  }

  for(let i=0; i<p.length; i++){
    p[i].show();
    p[i].update();
  }
  if(p[p.length-1].x < 400){
    let p1 = new Pipe(width+70, floor(random(60, 770)), pw, ph);
    p.push(p1);
  }

  if(p[0].x < -pw)
    p.shift();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(b.vel>-5)
      b.vel -= 5;
  }
  else if(key == 'r' && lose){
    setup();
    loop();
    lose  = false;
  }
}