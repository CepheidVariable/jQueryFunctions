$(document).ready(function() {

    
    // your jquery codes here
    $("#world_preview div").addClass("prev");
    $("#world_preview div:nth-child(1)").addClass("slideShow1");
    $("#world_preview div:nth-child(2)").addClass("slideShow2");
    $("#world_preview div:nth-child(3)").addClass("slideShow3");
    $("#world_preview div:nth-child(4)").addClass("slideShow4");

    $("#world_preview").addClass("flexing");
    $("#world_preview img").attr("alt", "World Gallery Image");
    // $("#world_preview .prevBox3").hide();
    // $(".slideShow1 img").fadeOut(500);
});

// $('#slideShow1 img:gt(0)').hide();

var speed = 6000;
run = setInterval("test()", speed);
function test(){
  $('.slideShow1 img:first-child').fadeOut(500).next().show().end().appendTo('.slideShow1');
}