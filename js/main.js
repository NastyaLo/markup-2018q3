$(document).ready(function(){
    $('.main__reviews__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $("#login").on('click', function() {
        $("#loginField").addClass('open');
    });

    $("#closeLogin").on('click', function() {
       $("#loginField").removeClass('open');
    });

    $("#register").on('click', function() {
        $("#registerField").addClass('open');
     });

     $("#closeRegister").on('click', function() {
        $("#registerField").removeClass('open');
     });
});
       