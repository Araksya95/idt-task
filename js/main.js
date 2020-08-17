 $(document).ready(function(){
  $('.account').on('click', '.show_account', function(){
      $('.account__info').show();
      $(this).removeClass('show_account');
      $(this).addClass('hide_acount');
  })
  $('.account').on('click', '.hide_acount', function(){
      $('.account__info').hide();
      $(this).removeClass('hide_acount');
      $(this).addClass('show_account');
  })


   $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
       {
         breakpoint: 1425,
         settings: {
           infinite: true,
           slidesToShow: 2
        }
       },
       {
         breakpoint: 700,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
    ]
   });


  })