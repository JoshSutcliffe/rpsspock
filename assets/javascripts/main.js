console.log("connected");

// var rock = document.getElementsByClassName("rock");
var rockButton = document.getElementById("rock");

var rockClick = function() {
  console.log("clicked on rock");
}

rockButton.addEventListener("click", rockClick);
