myApp.controller('CustomersController', ['$scope', function($scope) {
  $scope.sortBy = 'name';
  $scope.reverse = false;
  $scope.customers = [{name:'John', city:'London', joined:'2014-12-02', orderTotal:212.5}, 
			{name:'Paul', city:'Liverpool', joined:'2014-11-02', orderTotal:312.1}, 
			{name:'George', city:'Glasgow', joined:'2014-10-02', orderTotal:435.99}, 
			{name:'Leo', city:'Albuquerque', joined:'2014-01-02', orderTotal:415.99}, 
			{name:'Ringo', city:'Manchester', joined:'2014-11-12', orderTotal:111}];
  $scope.doSort = function (propName) {
	$scope.sortBy = propName;
	$scope.reverse = !$scope.reverse
  };			
}]);
