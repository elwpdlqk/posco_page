(function (global, $) {
	var $menu = $('.menu_top li.m'),
		$contents = $('.scroll'),
		$doc = $('html, body');
	$menu.eq(0).addClass('on');
	$(function () {

		$menu.on('click', 'a', function (e) {
			var $target = $(this).parent(),
				idx = $target.index(),
				section = $contents.eq(idx),
				offsetTop = section.offset().top;
			$doc.stop()
				.animate({
					scrollTop: offsetTop - 100
				}, 500);
			return false;
		});
	});

	$(window).scroll(function () {

		var scltop = $(window).scrollTop();

		$.each($contents, function (idx, item) {
			var $target = $contents.eq(idx),
				i = $target.index(),
				targetTop = $target.offset().top - 100;

			if (targetTop <= scltop) {
				$menu.removeClass('on');
				$menu.eq(idx).addClass('on');
			}
			if (!(0 <= scltop)) {
				$menu.removeClass('on');
			}
		});

	});
}(window, window.jQuery));
