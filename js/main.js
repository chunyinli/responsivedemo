

(function(window, document, $, _, undefined) {

    var RPD = this;
    

    // Main Navigation module
    RPD.mainNav = {
        initialize : function() {
            // constants
            this.$el = $('[data-site-nav]');
            this.$siteNavToggle = $('[data-site-nav-toggle]');
            this.$target = this.$el.add(this.$siteNavToggle);
            this.activeClass = 'active';

            this.bindEvents();
        },
        bindEvents : function() {
            this.$siteNavToggle.on('click', _.bind(this.toggleNavigation, this));
        },
        toggleNavigation : function () {
            this.$target.toggleClass(this.activeClass);
        }
    };

    RPD.modules = {
        initialize : function() {
            $('[data-module]').each(function(index, element) {
                var $element = $(element);
                var moduleType = $element.attr('data-module');

                var module = new RPD[moduleType](element);

                $.data(element, moduleType, module);
            });
        }
    }


    RPD.initialize = function() {
        // initialize all modules here
        this.mainNav.initialize();
        this.modules.initialize();
    };

    RPD.initialize();


    


}).call(window.RPD = window.RPD || {}, window, document, jQuery, _)