var moviename = "Spirited Away"

$(document).ready(function(){
  $( "#moviename" ).html( "<span class=\"rainbow\">" + moviename + "</span>");
  $( "#toclick" ).click(function() {
    $( "#toclick" ).html( "" ).css( "z-index", "-1")
  });
});
