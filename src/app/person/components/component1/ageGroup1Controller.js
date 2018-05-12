var app = angular.module("ageFilterApp");

app.controller("ageGroup1Controller", ["$scope", "ageGroupFilter", function ($scope, ageGroupFilter) {

    vm = this;

    vm.tempArr = [];
    vm.filterAge = function () {
        debugger;
        var found = vm.selectedTag.some(function (el) {
            return el.id === '1';
        });
        if (!found) {
            vm.selectedTag.push({ id: '1', text: 'below-20' });
            if (vm.personData.length == vm.filteredData.length) {
                vm.personData = ageGroupFilter(vm.selectedTag, vm.filteredData, 0, 19);
                vm.grp1Count = vm.personData.length;
            } else {
                vm.grp1Count = ageGroupFilter(vm.selectedTag, vm.filteredData, 0, 19).length;
                vm.tempArr = vm.personData.concat(ageGroupFilter(vm.selectedTag, vm.filteredData, 0, 19));
                vm.personData = vm.tempArr;

            }

        }


    };

}]);

