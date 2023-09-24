const c=color(255,0,0);
const f=color(0,0,255);


function take_snapshot_func()
    {

        save("img.png");
    }


function preload(){
}

function setup() {
    
    canvas = createCanvas(640, 550);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    fill(255,0,0);
    rect(160,80,320,50);
    
    fill(255,0,0);
    rect(160,410,320,50);
    
    fill(255,0,0);
    rect(93,110,50,320);
    
    fill(255,0,0);
    rect(483,110,50,320);
    
    fill(0,0,255);
   circle(120,100,100,100);
    fill(0,0,255);
   circle(510,100,100,100);
    fill(0,0,255);
   circle(120,430,100,100);
    fill(0,0,255);
   circle(510,430,100,100);
  
    image(video,220,185,200,200);
}