#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:customers.sqlite3'

class Customer < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end


get '/' do
	erb :index
end

get '/spa' do
	erb :spa
end
