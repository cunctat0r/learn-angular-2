(function() {
	var OrdersController = function($scope, $log, $routeParams, customersFactory) {
		var customerId = $routeParams.customerId;
		$scope.customer = null;

		function init() {
			// search the customer for the customerId
			//$scope.customer = customersFactory.getCustomer(customerId);			
			customersFactory.getCustomer(customerId)
				.success(function(customer) {					
					$scope.customer = customer;
				})
				.error(function(data, status, header, config) {
				// handle error
					$log.log(data.error + ' ' + status);
				});
		}		
		
  		
  		init();
	};

	OrdersController.$inject = ['$scope', '$log', '$routeParams', 'customersFactory'];
	angular.module('myApp').controller('OrdersController', OrdersController);
}());
