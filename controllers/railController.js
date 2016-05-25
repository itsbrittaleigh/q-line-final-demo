angular.module('mapModule')
    .controller('railController', function($scope, railService){
        var returnedArr = railService.getData();
        $scope.yelpArr = returnedArr;
    

    $scope.place_index = 0;
  
    $scope.show = function(){
        if (returnedArr.length === 0){
            return false;
        }else{
            return true;
        }
    };

    $scope.next = function () {
        if ($scope.place_index >= returnedArr.length - 1) {
            $scope.place_index = 0;
        }else{
            $scope.place_index++;
        }
    console.log(($scope.place_index) + "/" + (returnedArr.length))
    };


    $scope.back = function () {
        if ($scope.place_index <= returnedArr.length - 1 &&
            $scope.place_index > 0) {
                $scope.place_index --;
        } else {
            $scope.place_index = returnedArr.length - 1;
        }
    console.log(($scope.place_index) + "/" + (returnedArr.length))
    };

    var stuffToDo = [];
    $scope.intin = function(){
        stuffToDo.push(returnedArr[$scope.place_index]);
        console.log(stuffToDo);
    };






});




