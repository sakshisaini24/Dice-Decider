var p1= prompt("Enter Player 1's name!");
var p2= prompt("Enter Player 2's name!");
document.getElementById("player1").innerHTML=p1;
document.getElementById("player2").innerHTML=p2;
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
var s1= "images/dice"+randomNumber1+".png";
var s2= "images/dice"+randomNumber2+".png";
var k= document.getElementById("p1");
k.setAttribute("src",s1);
var k2= document.getElementById("p2");
k2.setAttribute("src",s2);

if(randomNumber1>randomNumber2){
    document.getElementById("subTitle").innerHTML= p1+" wins!";
}
else if(randomNumber2>randomNumber1){
    document.getElementById("subTitle").innerHTML= p2+" wins!";
}
else{
    document.getElementById("subTitle").innerHTML="It is Tie! Play again🔁";
}