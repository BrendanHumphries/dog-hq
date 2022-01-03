Rails.application.routes.draw do
  resources :favorite_breeds, only: [:index, :show, :create, :destroy]
  resources :breeds, only: [:index, :show]
  resources :tags, only: [:index, :show, :create, :destroy]
  resources :friends, only: [:index, :show, :create, :destroy]
  resources :posts
  resources :dogs
  resources :users, only: [:index, :create]
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
