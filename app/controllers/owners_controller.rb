class OwnersController < ApplicationController

  def index
    unless owner_signed_in?
      redirect_to root_path
    end
  end
end
