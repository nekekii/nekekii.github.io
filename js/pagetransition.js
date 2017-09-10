$(document).ready(function(){
    console.log("Welcome to my JS, brave traveler.")
    $("#text").css("right", "100vw");
    $("#text").animate({right: '0vw'}, 1000);
    $("img").click(function(){
        console.log("clicked");
        $("#text").animate({left: '100vw'}, 1500, function(){
          console.log("Have a nice day!");
          window.location.href = "http://steamcommunity.com/profiles/76561198071986407";
        });
    });
});
