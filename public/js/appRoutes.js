angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/gallery', {
			templateUrl: 'views/gallery.html',
			controller: 'GalleryController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'	
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

	$locationProvider.html5Mode(true);

}]);