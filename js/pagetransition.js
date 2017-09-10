$(document).ready(function(){
    console.log("Welcome to my JS, brave traveler.")
    $("#social").html('<img src="images/steam.png" id="steam"><img src="images/snapchat.png" id="sc"><img src="images/github.png" id="gh">"');
    $("#text").css("top", "-100vh");
    $("#text").animate({top: '25vh'}, 1000);

    $("#steam").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "http://steamcommunity.com/profiles/76561198071986407";
        }else{
          $("#text").animate({left: '-100vw'}, 1000, function(){
            console.log("Have a nice day! See you on steam.");
            window.location.href = "http://steamcommunity.com/profiles/76561198071986407";
          });
        }
    });

    $("#sc").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "http://snapchat.com/add/nekekii";
        }else{
          $("#text").animate({top: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Snapchat.");
            window.location.href = "http://snapchat.com/add/nekekii";
          });
        }
    });

    $("#gh").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://github.com/nekekii/";
        }else{
          $("#text").animate({left: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on GitHub.");
            window.location.href = "https://github.com/nekekii/";
          });
        }
    });
});
