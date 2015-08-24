;(function (window, document, $, undefined) {
	'use strict';

	/**
	 * Simple jQuery plugin for doing stuff when an element
	 * hits the top of the page.
	 * @author Ord&Bild Reklambyrå
	 * @version 1
	 */
	var hitsTop = function (element, callback) {
		// Store the elements and the callback function
		this.element = element;
		this.$element = $(element);
		this.callback = callback;

		// Handy global variable
		this.$window = $(window);

		this.init();
	};

	/**
	 * Boots up the plugin
	 */
	hitsTop.prototype.init = function() {
		this.hitTop = false;
		this.hadHitTop = this.hitTop;
		
		this.setElementOffset();
		this.events();
	};

	/**
	 * Stores the top offset of the element. No need to look it up
	 * in the DOM on each scroll event!
	 */
	hitsTop.prototype.setElementOffset = function() {
		this.elementOffset = this.$element.offset().top;
	};

	/**
	 * Bind events to methods
	 */
	hitsTop.prototype.events = function() {
		this.$window.on('resize orientationchange', this.resizeHandler.bind(this));
		this.$window.on('scroll', this.scrollHandler.bind(this));
	};

	/**
	 * The method that handles stuff that should happen when scrolling.
	 */
	hitsTop.prototype.scrollHandler = function() {
		this.hitTop = (this.$window.scrollTop() >= this.elementOffset);
		if (this.hitTop !== this.hadHitTop) {
			this.callback(this.hitTop);
			this.hadHitTop = this.hitTop;
		}
	};

	/**
	 * When the window is resized or the orientation has changed...
	 * @return {[type]} [description]
	 */
	hitsTop.prototype.resizeHandler = function() {
		this.setElementOffset();
	};

	/**
	 * Add plugin to the jQuery object.
	 */
	$.fn['hitsTop'] = function (callback) {
		return this.each(function () {
            if (!$.data(this, 'plugin_hitsTop')) {
                $.data(this, 'plugin_hitsTop', 
                new hitsTop( this, callback ));
            }
        });
	}


})(window, document, jQuery);