var ageGroup4 = {
    templateUrl: "person/components/component4/fourthGroup.html",
    controller: "ageGroup4Controller",
    controllerAs: "ag4",
    bindings: {
        personData: "=",
        filteredData: "<",
        selectedTag: "="
    }
};

var app = angular.module("ageFilterApp");
app.component("ageGroup4",ageGroup4);
