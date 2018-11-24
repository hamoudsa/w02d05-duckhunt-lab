$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var $body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"

  var $duck = $('<div/>').addClass('duck');

$body.append($duck);

  
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  setInterval( function(){
    $duck.toggleClass('flap');
}, 250);
  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  $duck.css ({ 'left' : '80px', 'top' : '80px'}, 5000, function(){
    $duck.fadeOut(3000);
 } );
  
  // 4. Try making the duck move to a different location after 1 second
   /* function fadeTechIn() {
    console.log('hi');
    $duck.fadeIn(2000);  */
  // 5. Congratulations!
})
