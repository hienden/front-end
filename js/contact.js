//select
$('.select .select-btn').click(function(){
	$(this).parent().find('.drop-options').slideToggle(300);
});
$('.select .drop-options a').click(function(){
	$optVal = $(this).text();
	$(this).parent().parent().find('.select-btn').text($optVal);
	$(this).parent().slideUp(300);
});

//checkbox
$(document).ready(function(){
    $('.submit-btn').css('pointer-events','none');
    $('.submit-btn').css('cursor','default');
});
$('.checkbox').click(function(){
	if ($(this).is(':checked')){
      $('.submit-btn').css('pointer-events','all');
      $('.submit-btn').css('cursor','pointer');
    }
    else{
      $('.submit-btn').css('pointer-events','none');
      $('.submit-btn').css('cursor','default');
    }
});
    