$(document).ready(function () {
	$('.over li').on('mouseover', function () {
		var backUrl = ['url(../img/index_mov1_over.jpg)', 'url(../img/index_mov2_over.jpg)', 'url(../img/index_mov3_over.jpg)'],
			indexLi = $('.over li').index(this);
		$('.section-01').css({
			backgroundImage : backUrl[indexLi]
		});
	});
});
