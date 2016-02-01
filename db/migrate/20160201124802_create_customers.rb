class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.text :name
      t.text :city
      t.text :joined 
      t.decimal :orderTotal

      t.timestamps
    end
  end
end
