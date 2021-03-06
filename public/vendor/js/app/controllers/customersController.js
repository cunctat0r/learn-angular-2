(function() {
	var CustomersController = function($scope, $log, customersFactory, appSettings) {
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
					$log.log(data.error + ' ' + status);
				});
		}
		init();
		
		$scope.doSort = function (propName) {
		  $scope.sortBy = propName;
		  $scope.reverse = !$scope.reverse
		};			
	};
	CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];
	angular.module('myApp').controller('CustomersController', CustomersController);
}());
