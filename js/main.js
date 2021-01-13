$(function () {
  $('.preview').slick({
    arrows: true,
    slidesToShow: 1,
    asNavFor: '.thumbs',
    prevArrow: '<button type="button" class="slick-btn slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next">Next</button>',
    speed: 500,

  });
  $('.thumbs').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.preview',
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
        slidesToShow: 4,
        infinite: true,
        arrows: true,

        }
      },
      {
        breakpoint: 480,
        settings: {          
          slidesToShow: 2
        }
      }
    ]

  });

});