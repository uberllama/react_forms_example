Rails.application.routes.draw do

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      resources :categories, only: [:index]
      resources :posts, only: [:index, :show, :create, :update, :destroy]
    end
  end

  root to: 'react#show'
  get '*path', to: 'react#show', constraints: { format: 'html' }

end
