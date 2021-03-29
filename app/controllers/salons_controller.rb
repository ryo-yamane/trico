class SalonsController < ApplicationController
  def index
    if user_signed_in?
      redirect_to users_path
    end
  end

  def choose_index
  end

  def hair_index
  end

  def nail_index
  end

  def eyelash_index
  end

  def estetic_index
  end

end
