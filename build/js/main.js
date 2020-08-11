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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIC8vIHNwZWVkOiAyNTAwLFxyXG4gICAgdXNlVHJhbnNmb3JtOiBmYWxzZVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgbGV0IG93bCA9ICQoJy5vd2wtY2Fyb3VzZWwnKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyOiB0cnVlLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICBzdGFnZVBhZGRpbmc6IDEsXHJcbiAgICBzbWFydFNwZWVkOiA1MDBcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm93bC1pdGVtLmFjdGl2ZScpWzBdLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuXHJcbiAgb3dsLm9uKCd0cmFuc2xhdGUub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoJy5vd2wtaXRlbS5sZWZ0JykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vd2wtaXRlbS5hY3RpdmUnKVswXS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XHJcbiAgfSk7XHJcblxyXG4gIG93bC5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgLy8gJCgnLm93bC1pdGVtLmxlZnQnKS5yZW1vdmVDbGFzcygnbGVmdCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm93bC1pdGVtLmFjdGl2ZScpWzBdLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
