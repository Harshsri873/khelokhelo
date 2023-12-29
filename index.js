var player1 = "Player 1"; 
var player2 = "Player 2"; 
function editNames() { 
    player1 = prompt("Change Player1 name"); 
    player2 = prompt("Change player2 name"); 

    document.querySelector("p.Player1").innerHTML = player1; 
    document.querySelector("p.Player2").innerHTML = player2; 
} 
editNames()
function roll()
{
var random1=Math.floor( Math.random()*6)+1;
var random2=Math.floor( Math.random()*6)+1;
var randomimage1="images/dice"+random1+".png";
var randomimage2="images/dice"+random2+".png";
let a=document.querySelectorAll("img")[0];
let b=document.querySelectorAll("img")[1];
a.setAttribute("src",randomimage1);
b.setAttribute("src",randomimage2);

if(random1>random2)
{
    let kuch=document.querySelector("h1");
    kuch.innerHTML=(player1 +" is the winner");
}
else if(random1==random2)
{
    let kuch=document.querySelector("h1");
    kuch.innerHTML="DRAW !";
}
else{
    let kuch=document.querySelector("h1");
    kuch.innerHTML=(player2 +" is the winner");
}
}