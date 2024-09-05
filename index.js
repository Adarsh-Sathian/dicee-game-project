var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector(".img1")
image1.setAttribute("src", randomImage1);

var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImage2);


var date = new Date();
var year = date.getFullYear();
document.querySelector("footer").innerHTML = "Adarsh Sathian " + year + "🎲";
