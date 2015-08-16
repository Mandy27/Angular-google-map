var myApp = angular.module('AngularMapDirective', []);
myApp.directive('mygmap', function(){
	var link = function($scope) {
		function initializeMap (){
			var mapOptions = {
				center: $scope.center,
				zoom: $scope.zoom
			}
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}
		initializeMap();
	}
	return {
		restrict: 'E',
		scope: {
			center: '=',
			zoom: '='
		},
		template: '<div id="map"></div>',
    	link: link
  	};
});