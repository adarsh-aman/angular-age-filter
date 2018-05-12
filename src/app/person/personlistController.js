var app = angular.module('ageFilterApp');

app.controller('personlistController', ['$scope', '$http', 'personListData',
    function ($scope, $http, personListData) {

        personListData.getPersonList().then(function (response) {
            $scope.tags = [];
            $scope.tags.push({ id: '0', text: '' });
            $scope.persons = response.data;
            $scope.personsCopy = angular.copy($scope.persons);
        });

    }

]);