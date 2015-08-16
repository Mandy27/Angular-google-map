var myApp = angular.module('AngularMap', ['uiGmapgoogle-maps']);
//var myApp = angular.module('AngularMap', ['AngularMapDirective']);
myApp.controller('MapController', ['$scope','$interval', function($scope, $interval) {	
	var carArr = [{
		id: 1,
		coords: { latitude: 32.867881, longitude: -117.22 },
		options: { visible: true}
	},
	{
		id: 2,
		coords: { latitude: 32.868, longitude: -117.23 },
		options: { visible: true }
	},
	{
		id: 3,
		coords: { latitude: 32.87, longitude: -117.21 },
		options: { visible: true }
	},
	{
		id: 4,
		coords: { latitude: 32.869, longitude: -117.21 },
		options: { visible: true }
	}];
	$scope.map = { 
		center: { latitude: 32.867881, longitude: -117.212951 }, 
		zoom: 14 
	};
	$scope.markers = [];
	
	$scope.$watch("selectCar",function(){
		if($scope.selectCar == "truck") {
			$scope.markers = [];
			$scope.markers.push(carArr[0]);
		}
		else if($scope.selectCar == "sedan") {
			$scope.markers = [];
			$scope.markers.push(carArr[1]);
		}
		else if($scope.selectCar == "van") {
			$scope.markers = [];
			$scope.markers.push(carArr[2]);
		}
		else if($scope.selectCar == "motorcycle") {
			$scope.markers = [];
			$scope.markers.push(carArr[3]);
		}
		else {
			$scope.markers = [];
			$scope.markers = carArr;
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