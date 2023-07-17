//tracks the current interval
var intervalID = 0;

//function starts when the user clicks the start button and the image will move randomly around the screen
function start(){
    //points to the image
    var image = document.getElementById("meme")

    //this code moves the image around by changing the top and left coordinates of the image
    intervalID = setInterval(function(){
var changeX = getRandomNumber();
var changeY = getRandomNumber();

image.style.left = changeX + "px";
image.style.top = changeY + "px";

console.log("x=" + changeX)
console.log("y=" + changeY)
    }, 1000);
}

function getRandomNumber(){
    return Math.floor(Math.random() * 800);
}

//function stops the code from running when the user clicks on the stop button
function stop(){
    clearInterval(intervalID);
}