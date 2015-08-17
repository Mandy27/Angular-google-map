var myApp = angular.module('AngularMapDirective', []);
myApp.directive('mygmap',['$interval',function($interval){
	var link = function($scope) {
		var markerArr = [];
		var map;
		function initializeMap (){
			// Create map
			var mapOptions = {
				center: {
					lat: $scope.center.latitude,
					lng: $scope.center.longitude
				},
				zoom: $scope.zoom
			}
			map = new google.maps.Map(document.getElementById("map"), mapOptions);

			//Create markers
			$scope.markers.forEach(function(marker){
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

		// Update marker position
		$interval(function () {
			markerArr.forEach(function(item){			//Remove all markers   NEED better solution
				item.setMap(null);
			});
			$scope.markers.forEach(function(marker){	// Create markers with new location
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
  		},1000);
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