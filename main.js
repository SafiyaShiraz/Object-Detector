img= "";
status ="";

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status= true;
    ObjectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log(results);
    }
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 500, 500);
    fill("#FF6860");
    text("Dog", 130, 100);
    noFill();
    stroke("#000000");
    rect(130, 60, 150, 450);


    fill("#FF6860");
    text("Cat", 300, 130);
    noFill();
    stroke("#000000");
    rect(300, 90, 270, 320)
}