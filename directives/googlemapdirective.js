var myApp = angular.module('AngularMapDirective', []);
myApp.directive('mygmap',['$interval',function($interval){
	var link = function(scope, attrs) {
		var markerArr = [];
		var map;
		function initializeMap (){
			// Create map
			var mapOptions = {
				center: {
					lat: scope.center.latitude,
					lng: scope.center.longitude
				},
				zoom: scope.zoom
			}
			map = new google.maps.Map(document.getElementById("map"), mapOptions);

			//Create markers
			scope.markers.forEach(function(marker){
				var myLatLng = {
					lat: marker.coords.latitude,
					lng: marker.coords.longitude
				};
				var marker = new google.maps.Marker({
					id: marker.id,
    				position: myLatLng,
    				options: marker.options,
    				map: map,
  				});
  				markerArr.push(marker);
			});
		}
		
		initializeMap();

		scope.$watch("markers", function(newValue, oldValue) {
			if(!(newValue === oldValue)){
	            for(var i = 0; i < newValue.length; i++){
					if(newValue[i].options.visible != markerArr[i].visible){
						markerArr[i].visible = newValue[i].options.visible
					};
					markerArr[i].setPosition(new google.maps.LatLng( newValue[i].coords.latitude, newValue[i].coords.longitude));
				}
			}
		},true);

		// Update marker position
		// $interval(function () {				//Compare markers in $scope and actual markers on google map
		// 	for(var i = 0; i < $scope.markers.length; i++){
		// 		if($scope.markers[i].options.visible != markerArr[i].visible){
		// 			markerArr[i].visible = $scope.markers[i].options.visible
		// 		};
		// 		markerArr[i].setPosition(new google.maps.LatLng( $scope.markers[i].coords.latitude, $scope.markers[i].coords.longitude));
		// 	}
  // 		},1000);
		
	}
	return {
		restrict: 'E',
		scope: {
			center: '=',
			zoom: '=',
			markers: '='
		},
		template: '<div id="map"></div>',
    	link: link
  	};
}]);