var ageGroup3 = {
    templateUrl: 'person/components/component3/thirdGroup.html',
    controller: 'ageGroup3Controller',
    controllerAs: 'ag3',
    bindings: {
        personData: '=',
        filteredData: '<',
        selectedTag: '='
    }

};

var app = angular.module("ageFilterApp");

app.component('ageGroup3',ageGroup3);