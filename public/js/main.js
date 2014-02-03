

(function(window, document, $, _, undefined) {

    RPD = this;

    // Main Navigation module
    RPD.mainNav = {
        initialize : function () {
            // constants
            this.$el = $('[data-site-nav]');
            this.$siteNavToggle = $('[data-site-nav-toggle]');
            this.$target = this.$el.add(this.$siteNavToggle);
            this.activeClass = 'active';

            this.bindEvents();
        },
        bindEvents : function () {
            this.$siteNavToggle.on('click', _.bind(this.toggleNavigation, this));
        },
        toggleNavigation : function () {
            console.log('toggle nav');
            this.$target.toggleClass(this.activeClass);
        }
    };

    RPD.initialize = function () {
        // initialize all modules here
        this.mainNav.initialize();
    };

    RPD.initialize();

}).call(window.RPD = window.RPD || {}, window, document, jQuery, _)