#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:customers.sqlite3'

class Customer < ActiveRecord::Base
  has_many :orders
end

class Order < ActiveRecord::Base
  belongs_to :customer
end


get '/' do
	erb :index
end

get '/spa' do
	erb :spa
end

get '/customers/:id' do
  customer = Customer.find_by_id params[:id]
  if customer == nil    
    return 'No such customer'
  end

  orders = Order.where(customer_id: params[:id])
  
  data = customer.as_json
  ord = orders.as_json
  data[:orders] = ord
  data.to_json  
end

get '/customers' do
  customers_data = Customer.all
  if customers_data.empty?
    return 'There are no customers in database'
  else
    customers = customers_data.as_json.to_json  
  end
  
end

get '/orders' do
  orders_data = Order.all
  if orders_data.empty?
    return 'There are no orders in database'
  else
    orders = orders_data.as_json.to_json  
  end
  
end
