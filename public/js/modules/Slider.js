

(function(window, document, $, _, undefined) {


    var Slider = function(el) {
        this.el = el;
        this.$el = $(el);
        this.initialize();
    };

    Slider.prototype.initialize = function() {

        
        this.$list = this.$el.find('[data-slider-list]');

        this.$list.elastislide({
            minItems : 1
        });
    };

    Slider.prototype.bindEvents = function() {

    };


    RPD.Slider = Slider;


}).call(window.RPD = window.RPD || {}, window, document, jQuery, _);




