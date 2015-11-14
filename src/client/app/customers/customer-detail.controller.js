(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetail', CustomerDetail);

    /* @ngInject */
    function CustomerDetail($stateParams, $window, dataservice, logger) {
        var vm = this;
        vm.cancel = cancel;
        vm.customer = undefined;
        vm.goBack = goBack;
        vm.isUnchanged = isUnchanged;
        vm.getFullName = getFullName;
        vm.save = save;
        vm.title = 'Editer le client';

        activate();

        function activate() {
            return getCustomer($stateParams.id).then(function() {
                //logger.info('View client activée');
            });
        }

        function cancel() {
            vm.customer = angular.copy(vm.original);
        }

        function getCustomer(id) {
            return dataservice.getCustomer(id).then(function(data) {
                vm.customer = data;
                vm.original = angular.copy(vm.customer);
                return vm.customer;
            });
        }

        function goBack() {
            $window.history.back();
        }

        function isUnchanged() {
            return angular.equals(vm.customer, vm.original);
        }

        function getFullName() {
            return vm.customer && vm.customer.firstName + ' ' + vm.customer.lastName;
        }

        function save() {
            vm.original = angular.copy(vm.customer);
            logger.success('Enregistrement du client (fake)');
        }
    }
})();
