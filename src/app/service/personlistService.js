
var app = angular.module("ageFilterApp");

app.factory('personListData',function($http){
   
    function getPersonList(){
    return $http.get('stubs/personlist.json');
    }
    return {
        getPersonList: getPersonList
    }
})