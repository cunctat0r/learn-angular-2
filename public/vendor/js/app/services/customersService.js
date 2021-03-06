(function() {
	var customesService = function() {
		var customers = [
	  		{
	  			id: 1, 
	  			name:'John', 
	  			city:'London', 
	  			joined:'2014-12-02', 
	  			orderTotal:212.5,
	  			orders: [
	  				{
		  				id: 1,
		  				product: 'Shoes',
		  				total: 212.5
	  				}
	  			]
	  		}, 
			{
				id: 2, 
				name:'Paul', 
				city:'Liverpool', 
				joined:'2014-11-02', 
				orderTotal:312.1,
				orders: [
	  				{
		  				id: 2,
		  				product: 'Baseball',
		  				total: 200
	  				}, 
	  				{
		  				id: 3,
		  				product: 'Bat',
		  				total: 112.1
	  				}, 
	  			]
			}, 
			{
				id: 3, 
				name:'George', 
				city:'Glasgow', 
				joined:'2014-10-02', 
				orderTotal:435.99,
				orders: [
	  				{
		  				id: 4,
		  				product: 'Whisky',
		  				total: 100
	  				}, 
	  				{
		  				id: 5,
		  				product: 'Ball',
		  				total: 335.99
	  				}, 
	  			]
			}, 
			{
				id: 4, 
				name:'Leo', 
				city:'Albuquerque', 
				joined:'2014-01-02', 
				orderTotal:415.99,
				orders: [
	  				{
		  				id: 6,
		  				product: 'Hat',
		  				total: 215
	  				}, 
	  				{
		  				id: 7,
		  				product: 'Pullover',
		  				total: 200.99
	  				}, 
	  			]
			}, 
			{
				id: 5, 
				name:'Ringo', 
				city:'Manchester', 
				joined:'2014-11-12', 
				orderTotal:111,
				orders: [
	  				{
		  				id: 8,
		  				product: 'Book',
		  				total: 100
	  				}, 
	  				{
		  				id: 9,
		  				product: 'Xbox',
		  				total: 11
	  				}, 
	  			]
			}
		];

		
		this.getCustomers = function() {
			return customers;
		};

		this.getCustomer = function(customerId) {
			for (var i = 0, len = customers.length; i < len; i++) {
				if (customers[i].id === parseInt(customerId)) {
					return customers[i];
				}
			}
			return {};
		};

		
	};


	angular.module('myApp').service('customersService', customesService);
}());