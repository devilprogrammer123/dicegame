var randomnum1=Math.floor(Math.random()*6)+1;

var randomdiceimg="dice"+randomnum1+".png"
var randomimagesSource="images/"+randomdiceimg;

 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomimagesSource);

 var randomnum2=Math.floor(Math.random()*6)+1;

 var image2=document.querySelectorAll("img")[1];

 var randomimagesSource2="images/dice"+randomnum2+".png";

 image2.setAttribute("src",randomimagesSource2);



 if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
 }
 else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!"
 }
 else{
    document.querySelector("h1").innerHTML="Draw!"
 }