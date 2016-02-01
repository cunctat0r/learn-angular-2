(function() {
	var myApp = angular.module('myApp', ['ngRoute']);	

	myApp.config(function($routeProvider) {
		$routeProvider
			.when('/',
			{
				controller: 'CustomersController',
				templateUrl: '/vendor/js/app/views/customers.html'
			})			
			.otherwise({redirectTo: '/'});

	});

}());

