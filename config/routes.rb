Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :benches, only: [:index, :create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
