class SalonsController < ApplicationController
  def index
    if user_signed_in?
      redirect_to users_path
    end
  end

  def choose_index
  end
end
