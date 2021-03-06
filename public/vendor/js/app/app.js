(function() {
	var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);	

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
			.when('/orders',
			{
				controller: 'AllOrdersController',
				templateUrl: '/vendor/js/app/views/allorders.html'
			})	
			.otherwise({redirectTo: '/'});

	});

}());

