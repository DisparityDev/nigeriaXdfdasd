window.onload = displayImage;

var imagesArray = [
    "cloud.png", 
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/icons/" + imagesArray[num];
}
