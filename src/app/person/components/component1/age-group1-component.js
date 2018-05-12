
var ageGroup1 = {
    templateUrl: '/person/components/component1/firstGroup.html',
    controller: 'ageGroup1Controller',
    controllerAs: 'ag1',
    bindings: {
        personData: '=',
        filteredData: '<',
        selectedTag: '='
    }

};

var app = angular.module('ageFilterApp');

app.component('ageGroup1',ageGroup1);
