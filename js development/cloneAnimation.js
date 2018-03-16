$( document ).ready( function () {

  $("body").append("<div class='container'></div> ")

  var container = $(".container");

  container.css("background-color", "white");

  container.css({
    "width":"900px",
    "height":"50px"
  });

  var homeLink = "<a href='#'>Home</a>";
  container.append(homeLink);
  homeLink = $("container a[href^='#']");

  homeLink.css({
    "font-size": "24px",
    "background-color": "aliceblue",
    "margin": "20px"
  });

console.log(homeLink);

homeLink.click(function(){
  console.log("Click");
})

var containerCopy = container.clone();

$("body").append(containerCopy);

container.css("height", "0");

containerCopy.animate({
  "display": "show",
  "height": "+=100"
}), 250, function(){
  console.log("animation finished");
});
});
});
