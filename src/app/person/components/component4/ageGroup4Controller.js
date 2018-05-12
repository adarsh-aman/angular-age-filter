var app = angular.module("ageFilterApp");

app.controller("ageGroup4Controller", ['$filter', 'ageGroupFilter', function ($filter, ageGroupFilter) {

  var vm = this;

  vm.filterAge = function () {
    debugger;
    var found = vm.selectedTag.some(function (el) {
      return el.id === '4';
    });
    if (!found) {
      vm.selectedTag.push({ id: '4', text: '60 above' });

      if (vm.personData.length == vm.filteredData.length) {
        vm.personData = ageGroupFilter(vm.selectedTag, vm.filteredData, 60, 120);
        vm.grp4Count = vm.personData.length;
      } else {
        vm.grp4Count = ageGroupFilter(vm.selectedTag, vm.filteredData, 60, 120).length;
        vm.tempArr = vm.personData.concat(ageGroupFilter(vm.selectedTag, vm.filteredData, 60, 120));
        vm.personData = vm.tempArr; 
      }

    }
  };

}]);