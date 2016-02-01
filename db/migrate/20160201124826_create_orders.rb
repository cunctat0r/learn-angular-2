class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|  
      t.references :customer, index: true, foreign_key: true
      t.text :product
      t.decimal :total
      
      t.timestamps
    end
  end
end
