$( document ).ready( function () {

  var amountOfDivs = 0;

  var arrayColors = ["green", "pink", "red", "yellow", "brown", "blue", "orange", "black"];

  for (let i=0; i<arrayColors.length; i++) {
    setTimeout(function(){
      console.log("function ran");
      $("body").css("background-color", arrayColors[i]);
    }, 1000*i);
  }
});
