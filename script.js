$(document).ready(function() {

  $("#next").click(function(){
    $('#slideshow img:first-child')
    .fadeOut(600)
    .next() 
    .fadeIn(500, function(){
    $('#slideshow img:first-child').appendTo('#slideshow')
    $('#slideshow img:last-child').hide();
    });
  });
  $("#prev").click(function(){
      $('#slideshow img:last-child')
      .fadeIn(500, function(){
        $('#slideshow img:last-child').prependTo('#slideshow')
        $('#slideshow img:nth-child(2)').hide();
      });
  });

  $("#world_preview div").addClass("preview");
  $("#world_preview div:nth-child(1)").addClass("slideShow1");
  $("#world_preview div:nth-child(2)").addClass("slideShow2");
  $("#world_preview div:nth-child(3)").addClass("slideShow3");
  $("#world_preview div:nth-child(4)").addClass("slideShow4");
  $("#world_preview").addClass("flexing");

  $("#world_preview img").attr("alt", "World Gallery Image");

  $("#footer").html("<p></p>");
  $("#footer p").text("Created by: Jemal Agayeva and Robert Woodard");
  $("#center").before("<div id='header'></div>");
  $("#header").html("<form></form>");
  $("form").html("<input type=textfield></input");
  $("input").val("Click me to hide");
  $(".sliderBody h2").after("<p>Some testing text here</p>");

  $("input").click(function(){
    $(this).toggle();
  });

  $(".slideshow").mouseover(function(){
    $(".slideshow img").css("transition" , "transform .2s ease-in-out");
    $(".slideshow img:first-child").css("transform" , "scale(1.15)");
    $(".sliderBody").css("transition" , "transform .2s ease-in-out");
    $(".sliderBody").css("transform" , "translateY(-240px)");
  });
  $(".slideshow").mouseleave(function(){
    $(".slideshow img:first-child").css("transform" , "scale(1)");
    $(".sliderBody").css("transform" , "translateY(-80px)");
  });
  $(".slideshow").mouseenter(function(){
    $(".sliderBody p").slideDown(2000);
  });
  $(".slideshow").mouseleave(function(){
    $(".sliderBody p").slideUp(0);
  });

  $(".slideShow1").click(function(){
    $(".dropdown1").slideToggle();
    $(".dropdown2").hide();
    $(".dropdown3").hide();
    $(".dropdown4").hide();
  });
  $(".slideShow2").click(function(){
    $(".dropdown2").slideToggle();
    $(".dropdown1").hide();
    $(".dropdown3").hide();
    $(".dropdown4").hide();
  });
  $(".slideShow3").click(function(){
    $(".dropdown3").slideToggle();
    $(".dropdown1").hide();
    $(".dropdown2").hide();
    $(".dropdown4").hide();
  });
  $(".slideShow4").click(function(){
    $(".dropdown4").slideToggle();
    $(".dropdown1").hide();
    $(".dropdown2").hide();
    $(".dropdown3").hide();
  });
});

var speed1 = 8000;
var speed2 = 4000;
var speed3 = 6000;
var speed4 = 12000;

run = setInterval("slideShow1()", speed1);
run = setInterval("slideShow2()", speed2);
run = setInterval("slideShow3()", speed3);
run = setInterval("slideShow4()", speed4);

function slideShow1(){
  $('.slideShow1 img:first-child')
    .next() 
    .fadeIn(800, function(){
    $('.slideShow1 img:first-child').appendTo('.slideShow1')
    $('.slideShow1 img:last-child').hide();
    });
}

function slideShow2(){
  $('.slideShow2 img:first-child')
  .next() 
  .fadeIn(800, function(){
  $('.slideShow2 img:first-child').appendTo('.slideShow2')
  $('.slideShow2 img:last-child').hide();
  });
}

function slideShow3(){
  $('.slideShow3 img:first-child')
  .next() 
  .fadeIn(800, function(){
  $('.slideShow3 img:first-child').appendTo('.slideShow3')
  $('.slideShow3 img:last-child').hide();
  });
}

function slideShow4(){
  $('.slideShow4 img:first-child')
  .next() 
  .fadeIn(800, function(){
  $('.slideShow4 img:first-child').appendTo('.slideShow4')
  $('.slideShow4 img:last-child').hide();
  });
}