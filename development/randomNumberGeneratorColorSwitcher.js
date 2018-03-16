// console.log("connected");
//
// $( document ).ready(function(){
//   $("#profile-text").css("color", "red");
//   console.log("jQuery works");
// });

// $( document ).ready(function(){
//   $("#profile-text").click(function(){
//     $("h1").css("color", "gold");
// });});

// $( document ).ready(function(){
//   var currentColor = $("profile-text").css("color");
//
//   if (currentColor == "rgb(0,0,0)"){
//     $("#profile-text").css("color", "grey");
//   } else {
//     $("#profile-text").css("color", "rgb(0,0,0)");
//   }
// });});

$( document ).ready(function(){

  var box = $("#myBox");
  var colorString="rgb(";

  setInterval(function(){
    colorString="rgb(";
    colorString = colorString +
    giveMeaRandomNumber() + ", " +
    giveMeaRandomNumber() + ", " +
    giveMeaRandomNumber() + ")";

    box.css( "background-color", colorString);
  }, 5000);

  $("#buttonColor").click( function (){
    colorString="rgb(";
    colorString = colorString +
    giveMeaRandomNumber() + ", " +
    giveMeaRandomNumber() + ", " +
    giveMeaRandomNumber() + ")";

    box.css("background-color", colorString);
  });
});

function giveMeaRandomNumber(){
  var number = Math.random() * 255;
  number = Math.floor(number);
  return number;
}
