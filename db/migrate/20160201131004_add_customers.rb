class AddCustomers < ActiveRecord::Migration
  def change
    Customer.create ({
      :name => 'John', 
      :city => 'London', 
      :joined => '2014-12-02', 
      :orderTotal => 212.5            
    })

    Customer.create ({      
      :name => 'Paul', 
      :city => 'Liverpool', 
      :joined => '2014-11-02', 
      :orderTotal => 312.1
    })

    Customer.create ({      
      :name => 'George', 
      :city => 'Glasgow', 
      :joined => '2014-10-02', 
      :orderTotal => 435.99
    })

    Customer.create ({
      :name => 'Leo', 
      :city => 'Albuquerque', 
      :joined => '2014-01-02', 
      :orderTotal => 415.99
    })

    Customer.create ({
      :name => 'Ringo', 
      :city => 'Manchester', 
      :joined => '2014-11-12', 
      :orderTotal => 111
    })
  end
end
