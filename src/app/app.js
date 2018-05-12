
var ageFilterApp = angular.module('ageFilterApp', ['ngRoute']);

ageFilterApp.config(['$routeProvider', '$qProvider',

    function config($routeProvider, $qProvider) {
        $routeProvider
            .when('/personList', {
                controller: 'personlistController',
                templateUrl: 'person/person.html'

            })

            .otherwise({ redirectTo: '/personList' });
        $qProvider.errorOnUnhandledRejections(false);
    }]);
