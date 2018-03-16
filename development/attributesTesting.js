
$( document ).ready( function () {

  $("body").append("<div class='container'></div");

  var container = $(".container");


  var number = 10;

  var num2 = number;

  num2++;



  $(".container")

  container.css("background-color", "white");

  container.css({
    "width": "900px",
    "height": "50px"
  });

  var homeLink = "<a id='home' href='#'>Home</a>";

  container.append(homeLink);

  homeLink = $(".container a[href^='#']");

  homeLink.css("font-size", "24px");
  homeLink.css("background-color", "aliceblue");
  homeLink.css("margin", "20px");

  console.log(homeLink);

  homeLink.click(function () {

    $("body").html("");

    console.log("Click");

  var containerCopy = container.clone();

  $("body").append(containerCopy);

  containerCopy.css("height", "0");

  containerCopy.animate({
    "height": "+=100"
  }, 250);
  });

  homeLink.attr("href", "http://www.google.com/");

  console.log(homeLink.attr("href"));

  homeLink.removeAttr("href");

  if (container.hasClass("container")) {
    console.log("Container has the class of .container");
  }


});
