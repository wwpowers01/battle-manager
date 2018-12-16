Rails.application.routes.draw do
  root 'static_pages#home'

  get '/register',      to: 'users#register'

  post '/login',        to: 'sessions#create'
  delete '/logout',     to: 'sessions#destroy'

  resources :combats, only: [:create, :show] do
    member do
      patch 'next'
      patch 'previous'
      patch 'roll'
    end
  end

end
