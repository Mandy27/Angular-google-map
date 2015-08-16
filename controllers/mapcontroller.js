//var myApp = angular.module('AngularMap', ['uiGmapgoogle-maps']);
var myApp = angular.module('AngularMap', ['AngularMapDirective']);
myApp.controller('MapController', ['$scope','$interval', function($scope, $interval) {	
	$scope.map = { 
		center: { lat: 32.867881, lng: -117.212951 }, 
		zoom: 14 
	};
	// $scope.marker = {
	// 	id: 1,
	// 	coords: { latitude: 32.867881, longitude: -117.22 },
	// 	options: { draggable: true }
	// }

	//  $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
 //      if (newVal === oldVal)
 //        return;
 //    });
 //    $interval(function () {
 //    	var l = $scope.marker.coords.latitude +0.001;
 //    	var lo = $scope.marker.coords.longitude+0.001;
	//     $scope.marker.coords = {
	//     	latitude: l,
	//         longitude: lo
	//     };
 //  	},1000);

}]);