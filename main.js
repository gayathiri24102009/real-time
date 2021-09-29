noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(650,500);
    canvas.position(700,80);
    posenet=ml5.poseNet(video,modeLoaded);
    posenet.on('pose',gotPosses);
}
function draw(){
    background('#bd0413');
    fill("#44a832");
    stroke('#44a832');
    textSize(difference);
    text("gayathri",noseX ,noseY);
}
function modeLoaded(){
    console.log('posenet is initialized');
}
function gotPosses(results){
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    difference=floor(leftWristX-rightWristX);
    document.getElementById("result").innerHTML="Width and Height of square ="+difference;
}
}
