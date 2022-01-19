var menu = 1;
function credits() {
  document.getElementById("table").style.backgroundColor = "purple";
  document.getElementById("img").width = 0;
  document.getElementById("img2").width = 0;
  document.getElementById("text").innerHTML = "Made by our lord and savious, Kevin Zhao, along with some help from Faiz Jan and Ben Vanderzwan";
  document.getElementById("mainbutton").innerHTML = "Back to Menu";
  menu = 0;
}
function more() {
  document.getElementById("table").style.backgroundColor = "blue";
  document.getElementById("img").width = 0;
  document.getElementById("img2").width = 0;
  document.getElementById("text").innerHTML = "More features to come, incluing, this entire thing working.";
  document.getElementById("mainbutton").innerHTML = "Back to Menu";
  menu = 0;
}
function rules() {
  document.getElementById("table").style.backgroundColor = "red";
  document.getElementById("img").width = 0;
  document.getElementById("img2").width = 0;
  document.getElementById("text").innerHTML = "Press [space] to shoot and use the WASD to move. Pretty simple.";
  document.getElementById("mainbutton").innerHTML = "Back to Menu";
  menu = 0;
}
function startGame() {
  if (menu == 0) {
    document.getElementById("table").style.backgroundColor = "rgba(255,157,0,1.00)";
    document.getElementById("img").width = 50;
    document.getElementById("img2").width = 200;
    document.getElementById("text").innerHTML = "";
    document.getElementById("mainbutton").innerHTML = "Start Game";
    menu = 1;
    //sai was here
  } else {
    document.getElementById("table").style.backgroundColor = "green";
    document.getElementById("ename").style.backgroundColor = "yellow";
    document.getElementById("table").innerHTML = "";
    document.getElementById("table").style.height = 0;
    document.getElementById("ename").innerHTML="<tr><td><h1 align='center'>Enter your Name</h1></td></tr><tr><td align='center'><input></input></td></tr><tr><td align='center'><button onClick='playGame()'>Enter</button></td></tr>";
    document.getElementById("ename").style.height = 720;
  }
}
function playGame() {
   document.getElementById("ename").innerHTML="";
   document.getElementById("ename").style.backgroundColor = "white";
   document.getElementById("ename").style.height = 0;
   var delayInMilliseconds = 1000;
   setTimeout(function() {
     window.location.href = "SummativeGame.html"
   }, delayInMilliseconds);
}
