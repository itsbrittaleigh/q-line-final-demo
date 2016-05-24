angular.module('mapModule')
	.controller('mainController', function($scope, $location, railService){
		$scope.interests = [
			{name:"Choose a category", type:""},
	        {name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];
	  
		$scope.hasChanged = function(){
			var int = $scope.selected.type;
			console.log(int);
			if (int !== ''){
				railService.retrieveYelp(int, function(data){
					railService.setData(data);
					$location.path('/map');
				}); 
			
            }
        };
});