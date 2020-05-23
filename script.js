$(function(){

    $(window).on('scroll', function(){
        if($(this).scrollTop()){
            $('#sticky').addClass('sticky');
        }else{
            $('#sticky').removeClass('sticky');
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


