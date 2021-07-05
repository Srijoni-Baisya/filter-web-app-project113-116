var noseX = 0;
var noseY = 0;
function preload(){
//insert filter img link
img = loadImage("https://i.postimg.cc/dVfJBh8K/mustache.png");
}

function setup(){
    canvas = createCanvas(550,550);
    canvas.center();//store canvas in var and place it in center

    //part1 - accessing webcam by createCapture() function
    video = createCapture(VIDEO);
    video.size(550,550);
    video.hide(); //hiding extra component

    //part3- initializing poseNet model using a predefined function
    poseNet = ml5.poseNet(video,modelLoaded);

    //part5 - executing poseNet model using on() function
    poseNet.on('pose',gotPoses);
}

//part4 - define modelLoaded() function to check that poseNet model has been loaded
function modelLoaded(){
    console.log("poseNet model is initialized !");
}

//part6 - define gotPoses() function to get x and y coordinates of body parts and display nose x and nose y coordinates on console
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x coordinate = "+ results[0].pose.nose.x);
        console.log("Nose y coordinate = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    //part2 - load webcam on canvas
    image(video,0,0,550,550);

    //place mustache filter
    image(img,noseX-50,noseY,100,30);
}
function take_snapshot(){
    save('mustache_filter_image.png');//save img
}