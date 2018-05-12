var app = angular.module("ageFilterApp");
app.controller("ageGroup2Controller", ["$scope", "ageGroupFilter", function ($scope, ageGroupFilter) {

  vm = this;

  vm.tempArr = [];
  vm.filterAge = function () {
    debugger;
    var found = vm.selectedTag.some(function (el) {
      return el.id === '2';
    });
    if (!found) {
      vm.selectedTag.push({ id: '2', text: '20-40' });

      if (vm.personData.length == vm.filteredData.length) {
        vm.personData = ageGroupFilter(vm.selectedTag, vm.filteredData, 20, 39);
        vm.grp2Count = vm.personData.length;
      } else {        
        vm.grp2Count = ageGroupFilter(vm.selectedTag, vm.filteredData, 20, 39).length;
        vm.tempArr = vm.personData.concat(ageGroupFilter(vm.selectedTag, vm.filteredData, 20, 39));
        vm.personData = vm.tempArr;
      }
    }


  };

}]);
