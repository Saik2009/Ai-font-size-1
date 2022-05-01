function preload(){

}
function setup(){
    canvas=createCanvas(650,550);
    canvas.position(0,50);
    video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',ModelLoaded)

function ModelLoaded()
{
  console.log("Model Loaded");

}
}
function draw(){
    image(video,0,0,660,550);
    classifier.classify(video,gotResult);

}
function gotResult(error,results)
{
  if(error)
  {
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result").innerHTML=results[0].label;
    document.getElementById("result1").innerHTML=results[0].label;
    document.getElementById("result2").innerHTML=results[0].label;
  }
}
