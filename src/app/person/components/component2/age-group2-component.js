
var ageGroup2 = {
    templateUrl: '/person/components/component2/secondGroup.html',
    controller: 'ageGroup2Controller',
    controllerAs: 'ag2',
    bindings: {
        personData: '=',
        filteredData: '<',
        selectedTag: '='
    }

};

var app = angular.module('ageFilterApp');

app.component('ageGroup2',ageGroup2);