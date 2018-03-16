//create text form
//put keypress listener on text form
//use "event" argument in listener to figure out what was pressed
//if statement if enter was pressed
//redirect to google.com

$( document ).ready( function () {

  var textfield = $("#text");

  textfield.keypress(function (event) {

    if (event.which == 13) {
      window.location.assign("http://www.google.com/search?q=" + textfield.val());
    }
  });

});
