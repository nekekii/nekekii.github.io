$(document).ready(function(){
  $( "#spamclick" ).click(function(){
    $( "#spamcontainer" ).html( "<div id=\"clicked\">Spam Click!!!!</div>" );
    window.location.href = 'https://drive.google.com/file/d/0B1BcMOQmwiM6ZXk5ekd1YmR6WG8/preview?t=1234';
  });
});
