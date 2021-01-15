$(function () {
  $('.preview').slick({
    arrows: true,
    slidesToShow: 1,
    asNavFor: '.thumbs',
    prevArrow: '<button type="button" class="slick-btn slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next">Next</button>',
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        } 
      }
    ]
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
        breakpoint: 1020,
        settings: {
          arrows: false,
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 3,
        }
      },

    ]
  });
});