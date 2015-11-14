/* jshint -W079 */
var mockData = (function() {
    return {
        getMockCustomers: getMockCustomers,
        getMockStates: getMockStates,
        thierryLebel: getMockCustomers()[0]
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockCustomers() {
        return [
            {
                id: 1017109,
                firstName: 'Sabrina',
                lastName: 'Lebel',
                city: 'Lyon',
                thumbnail: 'sabrina_lebel.jpg'
            },
            {
                id: 1017105,
                firstName: 'Nicolas',
                lastName: 'Barrier',
                city: 'Nantes',
                thumbnail: 'nicolas_barrier.jpg'
            },
            {
                id: 1017108,
                firstName: 'Benjamin',
                lastName: 'Maisonneuve',
                city: 'Bordeaux',
                thumbnail: 'benjamin_maisonneuve.jpg'
            },
            {
                id: 1017104,
                firstName: 'Jean-François',
                lastName: 'Gambier',
                city: 'Lille',
                thumbnail: 'jean-francois_gambier.jpg'
            },
            {
                id: 1017106,
                firstName: 'Yves',
                lastName: 'Rousselot',
                city: 'Reims',
                thumbnail: 'yves_rousselot.jpg'
            }
        ];
    }
})();
