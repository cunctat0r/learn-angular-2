(function() {
	var myApp = angular.module('myApp', ['ngRoute']);	

	myApp.config(function($routeProvider) {
		$routeProvider
			.when('/',
			{
				controller: 'CustomersController',
				templateUrl: '/vendor/js/app/views/customers.html'
			})			
			.when('/orders/:customerId',
			{
				controller: 'OrdersController',
				templateUrl: '/vendor/js/app/views/orders.html'
			})	
			.otherwise({redirectTo: '/'});

	});

}());

