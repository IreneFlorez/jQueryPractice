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

$( document ).ready(function(){
  var currentColor = $("profile-text").css("color");

  if (currentColor == "rgb(0,0,0)"){
    $("#profile-text").css("color", "grey");
  } else {
    $("#profile-text").css("color", "rgb(0,0,0)");
  }
});});
