$(function(){
   
    $(window).on('load', function(){
        $('.load').fadeOut(1000);
    })
    



    $(window).on('scroll', function(){
        var scrollSize = $(document).scrollTop();
        console.log($(document).scrollTop());
        if(scrollSize > 500){
            $('#backToTop').fadeIn();
        }
        else{
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });

})