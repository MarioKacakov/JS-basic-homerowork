$(document).ready(function(){

       $("#generate-button").click(function() {
              var text = $("#header-text").val();
              var color = $("#header-color").val();
        
              if (!text) {
                $("#message").text("Please enter a value for the text");
              } else {
                $("<h1></h1>")
                  .text(text)
                  .css("color", color)
                  .appendTo("body");
              }
            });
     });