(function() {
	var CustomersController = function($scope, customersFactory, appSettings) {
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.customers = [];
    	$scope.appSettings = appSettings;    

		function init() {
			//$scope.customers = customersFactory.getCustomers();  			
			customersFactory.getCustomers()
				.success(function(customers) {					
					$scope.customers = customers;
				})
				.error(function(data, status, header, config) {
// handle error
				});
		}
		init();
		
		$scope.doSort = function (propName) {
		  $scope.sortBy = propName;
		  $scope.reverse = !$scope.reverse
		};			
	};
	CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];
	angular.module('myApp').controller('CustomersController', CustomersController);
}());
