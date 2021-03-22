Rails.application.routes.draw do
  devise_for :owners , controllers: {
    sessions:     'owners/sessions',
    passwords:    'owners/passwords',
    registrations: 'owners/registrations' 
  }
  devise_for :users, controllers: {
    sessions:     'users/sessions',
    passwords:    'users/passwords',
    registrations: 'users/registrations', 
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

 root to: 'salons#index'
  resources :users, only: :new
  resources :salons, only: [:index] do

    collection do
     get 'choose_index'
    end
  end

end