$(document).ready(function() {

    
    // your jquery codes here
    $("#world_preview div").addClass("prev");
    $("#world_preview div:nth-child(1)").addClass("slideShow1");
    $("#world_preview div:nth-child(2)").addClass("slideShow2");
    $("#world_preview div:nth-child(3)").addClass("slideShow3");
    $("#world_preview div:nth-child(4)").addClass("slideShow4");

    $("#world_preview").addClass("flexing");
    $("#world_preview img").attr("alt", "World Gallery Image");
    $(".slider p").mouseover(function(){
      $(".slider p").alert();
      $(".slider p").css("transform","translate(- 240 px)");
    });
    // $(".btn").click(function(){
    //   $(".btn").
    // });


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



    // $("#world_preview .prevBox3").hide();
    // $(".slideShow1 img").fadeOut(500);
});

// $('#slideShow1 img:gt(0)').hide();

var speed1 = 8000;
var speed2 = 4000;
var speed3 = 6000;
var speed4 = 12000;

run = setInterval("slideShow1()", speed1);
run = setInterval("slideShow2()", speed2);
run = setInterval("slideShow3()", speed3);
run = setInterval("slideShow4()", speed4);

function slideShow1(){
  $('.slideShow1 img:first-child').fadeOut(800).next().show().appendTo('.slideShow1');
}

function slideShow2(){
  $('.slideShow2 img:first-child').fadeOut(800).next().show().end().appendTo('.slideShow2');
}

function slideShow3(){
  $('.slideShow3 img:first-child').fadeOut(800).next().show().end().appendTo('.slideShow3');
}

function slideShow4(){
  $('.slideShow4 img:first-child').fadeOut(800).next().show().end().appendTo('.slideShow4');
}

