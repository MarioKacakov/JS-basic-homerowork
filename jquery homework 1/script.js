// CREATE A GREETING APP WITH JQUERY

// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!


$(document).ready(function() {
let inputBtn = $('#inpt');

inputBtn.click(function() {
       $('#header').prepend('Hello There');

       });
}); 
