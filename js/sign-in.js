//sign-in
$('.remember .forget').click(function(){
	$(this).parent().slideUp(300);
	$('.forgot-pw').slideDown(300);
	$('.alert').css('display','none');
});

$('.remember .submit-btn').click(function(){
	if($(this).parent().find('.info').val() == ""){
		$('.alert').css('display','block');
		return false;
	}
});