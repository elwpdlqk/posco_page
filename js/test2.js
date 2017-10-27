$(document).ready(function () {
	'use strict';
	var win_h = $(window).height() - 100;
	$('#contents section').each(function (index) {
		//여기서의 index 는 키워드
		$(this).attr('data-index', win_h * index);
		$(this).css('height', win_h);
	});
	$('#contents section').on('mousewheel', function (e) {
		var sectionPos = parseInt($(this).attr('data-index'), 10);
		// parseInt : 값을 정수 값으로 바꿔줌
		if (e.originalEvent.wheelDelta >= 0) {
			$('html, body').stop().animate({
				scrollTop: sectionPos - win_h
			});
			return false;
		} else {
			$('html, body').stop().animate({
				scrollTop: sectionPos + win_h
			});
			return false;
		}
		//if end
	});
});
