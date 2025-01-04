# Require necessary gems
require 'sinatra'
require 'sinatra/reloader' if Sinatra::Base.development?
require 'json'
require 'securerandom'

# Configure the Sinatra application
configure do
    set :port, 4567
    set :environment, :development
    enable :logging
end

# Define helper methods
helpers do
    def json_response(response_hash)
        content_type :json
        response_hash.to_json
    end
end

# Set the content type to JSON for all responses
before do
    content_type :json
end

# Handle 404 Not Found errors
not_found do
    json_response({ message: 'Not Found' })
end

# Handle 500 Internal Server errors
error do
    json_response({ message: 'Internal Server Error' })
end

# Define a route to get all items
get '/api/v1/items' do
    items = [
        { id: SecureRandom.uuid, name: 'Item 1', description: 'Description for item 1' },
        { id: SecureRandom.uuid, name: 'Item 2', description: 'Description for item 2' }
    ]
    json_response(items)
end

# Define a route to create a new item
post '/api/v1/items' do
    request_payload = JSON.parse(request.body.read)
    new_item = {
        id: SecureRandom.uuid,
        name: request_payload['name'],
        description: request_payload['description']
    }
    json_response(new_item)
end

# Define a route to update an existing item
put '/api/v1/items/:id' do
    request_payload = JSON.parse(request.body.read)
    updated_item = {
        id: params[:id],
        name: request_payload['name'],
        description: request_payload['description']
    }
    json_response(updated_item)
end

# Define a route to delete an item
delete '/api/v1/items/:id' do
    json_response({ message: "Item with id #{params[:id]} deleted" })
end

# Define a route to greet the user by name
get '/hello/:name' do
    "Hello, #{params[:name]}!"
end

# Define the main application class
class MangoApp < Sinatra::Base
    get '/' do
        'Welcome to MangoApp!'
    end

    get '/hello/:name' do
        "Hello, #{params[:name]}!"
    end

    run! if app_file == $0
end