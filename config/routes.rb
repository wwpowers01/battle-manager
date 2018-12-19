Rails.application.routes.draw do
  root 'static_pages#home'

  get '/new',          to: 'static_pages#show'
  get '/register',      to: 'users#register'

  post '/login',        to: 'sessions#create'
  delete '/logout',     to: 'sessions#destroy'

  resources :combats, only: [:create, :show, :new] do
    member do
      patch 'next'
      patch 'previous'
      patch 'roll'
    end
  end

end
