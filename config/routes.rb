Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:index, :show]
    resources :reviews, only: [:create, :update, :destroy, :show]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    get "/listings/category/:category", to: "listings#index"
    get "/listings/search/:query", to: "listings#index"
    get "users/:user_id/cart_items", :to => "cart_items#index"
  end
end
