// alert("working");


var randomNum1=Math.floor(Math.random() *6)+1;

var randomImageS1="images/dice"+randomNum1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImageS1);




var randomNum2=Math.floor(Math.random() *6)+1;

var randomImageS2="images/dice"+randomNum2+".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImageS2);



if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
