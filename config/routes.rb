Rails.application.routes.draw do
  resources :favorite_breeds
  resources :breeds
  resources :tags
  resources :friends
  resources :posts
  resources :dogs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
