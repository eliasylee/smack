Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, except: [:new, :edit]
    resources :text_channels, only: [:show, :create, :update, :destroy]
    resources :messages, only: [:create, :update, :destroy]
  end

  root to: 'static_pages#root'
end
