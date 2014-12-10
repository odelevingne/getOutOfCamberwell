require 'sinatra'
require 'json'
require 'httparty'

get '/' do
  erb :index
end

get '/buses/api' do
  content_type :json
  response = HTTParty.get('http://transportapi.com/v3/uk/bus/stop/490006094N/live.json?group=route&api_key=43f13455dd098f1c550d336e10219e83&app_id=b35459a0')
  response.to_json
end

get '/denmark/api' do
  content_type :json
  response = HTTParty.get('http://transportapi.com/v3/uk/train/station/DMK/live.json?&api_key=43f13455dd098f1c550d336e10219e83&app_id=b35459a0')
  response.to_json
end

get '/dulwich/api' do
  content_type :json
  response = HTTParty.get('http://transportapi.com/v3/uk/train/station/EDW/live.json?&api_key=43f13455dd098f1c550d336e10219e83&app_id=b35459a0')
  response.to_json
end