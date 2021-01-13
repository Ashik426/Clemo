$(document).ready(function() {

//sticky menu
$(".js--services-section").waypoints(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");

    } else {
        $("nav").removeClass("sticky");

    }


});

});

