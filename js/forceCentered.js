jQuery(function($){
	'use strict';
	(function () {
		var $frame = $('#forcecentered');

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 0,
			touchDragging: 0,
			releaseSwing: 1,
			startAt: 10,
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1
		});
	}());
});