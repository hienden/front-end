// preloader
$(window).on('load',function(){
     $('#preloader').fadeOut('slow');
});


//back to top
  $(window).scroll(function(){
    $pos = $('html,body').scrollTop();
    if($pos>500){
      $('.backToTop').attr('style','visibility:visible; bottom: 5%;')
    }
    else{
      $('.backToTop').attr('style','visibility:hidden;')
    }
  });
  $('.backToTop').click(function() {
      $('html,body').animate({scrollTop: 0},1000);
   });

//header child menu
  $('.header-box .header .menu .menu-item .title').click(function(){
    $('.header-box .header .menu .menu-item .title').parent().find('.child-menu').slideUp();
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $(this).parent().find('.child-menu').slideDown();
      $('.header-box .header .menu .menu-item .title').css('background-color','#fff');
      $(this).css('background-color','#ebebeb');
    }
    else{
      $(this).parent().find('.child-menu').slideUp();
      $(this).css('background-color','#ffff');
    }
  });

  $(document).mouseup(function(e){
    if (!$('.header-box .header .menu .menu-item').is(e.target) && $('.header-box .header .menu .menu-item').has(e.target).length === 0){
        $('.header-box .header .menu .menu-item').find('.child-menu').slideUp();
        $('.header-box .header .menu .menu-item .title').css('background-color','#ffff');
    }
  });

//currency change
  $('.option-currency').click(function(){
    $setUnit = $(this).find('i').attr('class');  
    $('.currency-title').find('i').attr('class',$setUnit);
    $('.header-box .header .menu .menu-item .title').parent().find('.child-menu').slideUp();
     $('.header-box .header .menu .menu-item .title').css('background-color','#fff');
  });

// resheader button animation
  $('#box1').click(function(){
    $('#box3').css('display','none');
    $('#box1').css('display','none');
    $('#box2').css('display','block');
    $('.resHeader').slideUp(500);
  });
  $('#box2').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });
  $('#box3').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });

//toggle each item of res menu
  $('.pre-hid').click(function(){
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $('.pre-hid').parent().find('.child-menu').slideUp(300);
      $('.pre-hid').css('background-color','transparent');
      $(this).parent().find('.child-menu').slideDown(300);
      $(this).css('background-color','#ddd');
    }
    else{
      $(this).parent().find('.child-menu').slideUp(300);
      $(this).css('background-color','transparent');
    }
  });

//holidays responsive slide
$(document).ready(function(){
  $('.holiday2 .list').slick({
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      },
    ]
  });
})
  

