class AddOrders < ActiveRecord::Migration
  def change
    Order.create ({
      :customer_id => 1,
      :product => 'Shoes',
      :total => 212.5
    })

    Order.create ({
      :customer_id => 2,
      :product => 'Baseball',
      :total => 200
    })

    Order.create ({
      :customer_id => 2,
      :product => 'Bat',
      :total => 112.1
    })

    Order.create ({
      :customer_id => 3,
      :product => 'Whisky',
      :total => 100
    })

    Order.create ({
      :customer_id => 3,
      :product => 'Ball',
      :total => 335.99
    })

    Order.create ({
      :customer_id => 4,
      :product => 'Hat',
      :total => 215
    })

    Order.create ({
      :customer_id => 4,
      :product => 'Pullover',
      :total => 200.99
    })

    Order.create ({
      :customer_id => 5,
      :product => 'Book',
      :total => 100
    })

    Order.create ({
      :customer_id => 5,
      :product => 'Xbox',
      :total => 11
    })


  end
end
