$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    variableWidth: true,
    // speed: 2500,
    useTransform: false
  });


  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    center: true,
    variableWidth: true,
    mouseDrag: false,
    stagePadding: 1,
    smartSpeed: 500
  });

  document.querySelectorAll('.owl-item.active')[0].classList.add('left');

  owl.on('translate.owl.carousel', function(event) {
    $('.owl-item.left').removeClass('left');
    // document.querySelectorAll('.owl-item.active')[0].classList.add('left');
  });

  owl.on('translated.owl.carousel', function(event) {
    // $('.owl-item.left').removeClass('left');
    document.querySelectorAll('.owl-item.active')[0].classList.add('left');
  });

});
