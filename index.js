// var bgcolorlist = ['linear-gradient(#83f5e5, #e761bd)', 'linear-gradient(#a8f368, #f9035e)', 
// 'linear-gradient(#60efff, #0061ff)', 'linear-gradient(#f3f98a, #95ecb0)', 'linear-gradient(#45cde9, #7a8fd3)', 
// 'linear-gradient(#c3e1fc, #dd83ad)'  ];

var bgcolorlist = ['linear-gradient(#60efff, #0061ff)'];

//'linear-gradient(#07f49e, #42047e)' green to purple gradient, least fav
//'linear-gradient(#ef745c, #34073d) another one

$(document).ready(function() {
  var randomNumber = Math.floor(Math.random()*bgcolorlist.length);
  
  // $("body").css("background", bgcolorlist[randomNumber]);

  // $(".active").css({"background": bgcolorlist[randomNumber], "background-clip": "text",
  // "-webkit-background-clip": "text",
  // "-webkit-text-fill-color": "transparent"});

  // $(".cooper").css({"background": bgcolorlist[randomNumber], "background-clip": "text",
  // "-webkit-background-clip": "text",
  // "-webkit-text-fill-color": "transparent"});

  // $(".content h4").css({"background": bgcolorlist[randomNumber], "background-clip": "text",
  // "-webkit-background-clip": "text",
  // "-webkit-text-fill-color": "transparent"});

  // $(".welcome").css({"background": bgcolorlist[randomNumber], "background-clip": "text",
  // "-webkit-background-clip": "text",
  // "-webkit-text-fill-color": "transparent"});

  // $(".contact").css({"background": bgcolorlist[randomNumber], "background-clip": "text",
  // "-webkit-background-clip": "text",
  // "-webkit-text-fill-color": "transparent"});
  
  console.log(bgcolorlist[randomNumber]);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



