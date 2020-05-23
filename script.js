$(function( ){

    $(window).scroll(function(){
        if($(this).scrolltop()>height){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    });


});


// var header = $('header')
// var navFixed = $('nav')

// function checkSticky() {

//     var defilement = $(document).scrollTop();
//     var hauteurHeader = header.outerHeight();

//     if (defilement >= hauteurHeader) {
//         navFixed.addClass('sticky');
//     } else {
//         navFixed.removeClass('sticky');
//     }
// }

// checkSticky();

// $(document).scroll(checkSticky);
// $(window).resize(checkSticky);


