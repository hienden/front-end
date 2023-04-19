//image gallery
$('.gallery .images img').click(function(){
	$imgLink = $(this).attr('src');
	$('.show-image img').attr('src',$imgLink);
	$('.show-image').css('visibility','visible');
});
$('.show-image i').click(function(){
	$(this).parent().find('img').removeAttr('src');
	$('.show-image').css('visibility','hidden');
});