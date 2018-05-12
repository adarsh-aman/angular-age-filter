var app = angular.module('ageFilterApp');

app.filter("ageGroup",function(){
    debugger;
    return function(tags,value,min,max){
        var result =[];
        console.log(tags);
  
        for(var i in value){
            if(value[i].age >= min && value[i].age <=max)
            result.push(value[i]);
        }
      
      
        console.log(result);
        console.log(result.length);
        return result;
    }
});