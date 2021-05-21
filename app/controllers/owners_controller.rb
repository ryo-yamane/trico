class OwnersController < ApplicationController

  def index
    unless owner_signed_in?
      redirect_to root_path
    end
  end

  def start_time
    self.date_and_time
  end

  def end_time
    self.meetingfinishtime
  end
end
