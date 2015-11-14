(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    /* @ngInject */
    function Shell($timeout, config, logger) {
        var vm = this;

        vm.title = config.appTitle;
        vm.busyMessage = 'Chargement ...';
        vm.isBusy = true;
        vm.showSplash = true;
        vm.tagline = {
            text: '',
            link: ''
        };

        activate();

        function activate() {
            logger.success(config.appTitle, null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();
