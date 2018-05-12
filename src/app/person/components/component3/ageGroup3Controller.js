var app = angular.module("ageFilterApp");

app.controller("ageGroup3Controller", ["$scope", "ageGroupFilter", function ($scope, ageGroupFilter) {

  var vm = this;

  vm.filterAge = function () {
    var found = vm.selectedTag.some(function (el) {
      return el.id === '3';
    });
    if (!found) {
      vm.selectedTag.push({ id: '3', text: '40-60' });

      if (vm.personData.length == vm.filteredData.length) {
        vm.personData = ageGroupFilter(vm.selectedTag, vm.filteredData, 40, 69);
        vm.grp3Count = vm.personData.length;
      } else {
        vm.grp3Count = ageGroupFilter(vm.selectedTag, vm.filteredData, 40, 59).length;
        vm.tempArr = vm.personData.concat(ageGroupFilter(vm.selectedTag, vm.filteredData, 40, 59));
        vm.personData = vm.tempArr;
      }
    }

  };


}]);