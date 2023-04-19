//fixed topic bar
$(window).scroll(function(){
    $pos = $('html,body').scrollTop();
    if($pos>500){
      $('.topic').addClass('topic-bar');
    }
    else{
      $('.topic').removeClass('topic-bar');
    }
  });

//topic arrow
$('.topic .item').click(function(){
  $('.topic .item').find('.arrow').css('display','none');
  $(this).find('.arrow').css('display','block');
});

//display ribbon when scroll to location


