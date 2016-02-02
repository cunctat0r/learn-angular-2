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
  customer = Customer.find params[:id]
  orders = Order.where(customer_id: params[:id])
  
  data = customer.as_json
  ord = orders.as_json
  data[:orders] = ord
  data.to_json  
end

get '/customers' do
  customers_data = Customer.all
  customers = customers_data.as_json.to_json  
end
