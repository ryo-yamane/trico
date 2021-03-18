class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?


  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,
                                      keys: [:nickname, :first_name, :last_name, :first_name_kana, :last_name_kana,
                                             :birthday, :salon_name, :address,:phone_number, :how_to_pay_id, :salon_consept_id,
                                             :nearest_station, :rest_day_id])
  end


end
