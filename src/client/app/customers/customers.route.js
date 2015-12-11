(function() {
    'use strict';

    angular
        .module('app.customers')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'customer',
                config: {
                    abstract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/customer'
                }
            },
            {
                state: 'customer.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/customers/customers.html',
                    controller: 'Customers',
                    controllerAs: 'vm',
                    params: {title: 'Clients'}
                }
            },
            {
                state: 'customer.detail',
                config: {
                    url: '/:id',
                    templateUrl: 'app/customers/customer-detail.html',
                    controller: 'CustomerDetail',
                    controllerAs: 'vm',
                    params: {title: 'Clients'}
                }
            }
        ];
    }
})();
