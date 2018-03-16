$( document ).ready( function () {
    $("#submit").click( function (){
      var emailText = $("#email").val();
      var passwordText = $("#password").val();
      //console.log(validateEmailemailText(emailText), passwordText);


      $("#error").css("visibility", "visible");


      if (emailText == "hello@gmail.com") {

        if (passwordText == "1234"){
          var message = "That is the right password";

          $("#error").html(message);
        } else {
          var errorMessage = "That is not the right password";

          $("#error").html(errorMessage);
        }
      } else {
          var errorMessage = "No user exists with email " + emailText + " exists.";

          $("#error").html("<p>" + errorMessage+ "</p>");
      }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//source: Mevius: https://stackoverflow.com/users/3518452/rnevius See the question at: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
