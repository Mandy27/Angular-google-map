//var myApp = angular.module('AngularMap', ['uiGmapgoogle-maps']);
var myApp = angular.module('AngularMap', ['AngularMapDirective']);
myApp.controller('MapController', ['$scope','$interval', function($scope, $interval) {	
	$scope.selectCar="All";
	$scope.selectSize="All";
	$scope.tableHeaders=["Title","Size","Latitude","Longtitude"];
	$scope.map = { 
		center: { latitude: 32.867881, longitude: -117.212951 }, 
		zoom: 13 
	};
	$scope.markers = [{
		id: 1,
		title: "Truck",
		size: "large",
		coords: { latitude: 32.867881, longitude: -117.22 },
		options: { visible: true}
	},
	{
		id: 2,
		title: "Sedan",
		size: "small",
		coords: { latitude: 32.868, longitude: -117.23 },
		options: { visible: true }
	},
	{
		id: 3,
		title: "Van",
		size: "medium",
		coords: { latitude: 32.87, longitude: -117.21 },
		options: { visible: true }
	},
	{
		id: 4,
		title: "Motorcycle",
		size: "xsmall",
		coords: { latitude: 32.869, longitude: -117.21 },
		options: { visible: true }
	}];
	$scope.$watch("[selectCar, selectSize]",function(){
		if($scope.selectCar== "All" && $scope.selectSize == "All"){
			showAllMarkers();
		}
		else if ($scope.selectCar== "All"){
			hideAllMarkers();
			$scope.markers.forEach(function(car){
				if(car.size == $scope.selectSize){
					car.options.visible = true;
				}
			});
		}
		else if($scope.selectSize == "All"){
			hideAllMarkers();
			$scope.markers.forEach(function(car){
				if(car.title == $scope.selectCar){
					car.options.visible = true;
				}
			});
		}
		else {
			hideAllMarkers();
			$scope.markers.forEach(function(car){
				if(car.title == $scope.selectCar && car.size == $scope.selectSize){
					car.options.visible = true;
				}
			});
		}
	});
    $interval(function () {
    	for(var i = 0; i < $scope.markers.length; i++){
    		var l = $scope.markers[i].coords.latitude + (Math.random() * (0.002 - 0.0001) + 0.0001) - 0.001;
    		var lo = $scope.markers[i].coords.longitude+ (Math.random() * (0.002 - 0.0001) + 0.0001) - 0.001;
	    	$scope.markers[i].coords = {
		    	latitude: l,
		        longitude: lo
		    }
    	}
  	},1000);
	function showAllMarkers(){
		for(var i = 0; i < $scope.markers.length; i++){
    		$scope.markers[i].options.visible = true;
    	}
	}
    function hideAllMarkers() {
    	for(var i = 0; i < $scope.markers.length; i++){
    		$scope.markers[i].options.visible = false;
    	}
    }
}]);