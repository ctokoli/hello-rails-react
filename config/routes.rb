Rails.application.routes.draw do

  root 'root#index'
  namespace :api do
    get '/index', to: 'greetings#index'
  end
end
