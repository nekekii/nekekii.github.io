$(document).ready(function(){
    console.log("Welcome to my JS, brave traveler.");
    console.log("Don't ask.");
    console.log("this is cool I guess...");
    $("#social").html('<img src="images/steam.png" id="steam"><img src="images/twitter.png" id="tw"><img src="images/github.png" id="gh">');
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

    $("#tw").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://twitter.com/nekekiii";
        }else{
          $("#text").animate({top: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Twitter.");
            window.location.href = "https://twitter.com/nekekiii";
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
