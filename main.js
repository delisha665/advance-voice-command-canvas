function preload(){
    apple=loadImage("apple.png");
}

screen_width=0;
screen_height=0;
apple=" ";
speak_data="";
number=0;
draw_apple=" ";
to_draw=" ";
recognition=new window.webkitSpeechRecognition();
function begin(){
recognition.start();
document.getElementById("status").innerHTML="The system is listening to you.";
}
recognition.onresult=function(event){
    console.log(event);
   content=event.results[0][0].transcript;
    number=Number(content);
if(Number.isInteger(number)){
    document.getElementById("status").innerHTML="No. of apples you have spoken are: "+ number;
    draw_apple="set";
    console.log(number);
}
else{
    document.getElementById("status").innerHTML="The system has not recognized the number you have spoken";

}
}
function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-245);
    canvas.position(0,150);
}
function draw(){
    if (draw_apple=="set") {
for (let i = 0; i < number; i++) {
x=Math.floor(Math.random()*700);
y=Math.floor(Math.random()*400);
   image(apple,x,y,50,50);
}
    }
}