(function() {
	var OrdersController = function($scope, $routeParams, customersFactory) {
		var customerId = $routeParams.customerId;
		$scope.customer = null;

		function init() {
			// search the customer for the customerId
			$scope.customer = customersFactory.getCustomer(customerId);			
		}		
		
  		
  		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
	angular.module('myApp').controller('OrdersController', OrdersController);
}());
