class Owner < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :how_to_pay
  belongs_to :rest_day
  belongs_to :salon_concept

  with_options presence: true, format: { with: /\A[ぁ-んァ-ヶ一-龥々]+\z/, message: '全角文字を使用してください' } do
    validates :owner_first_name
    validates :owner_last_name
  end

  with_options presence: true, format: { with: /\A[ァ-ヶ]+\z/, message: 'カタカナでお願いします' } do
    validates :owner_first_name_kana
    validates :owner_last_name_kana
  end

  with_options numericality: {other_than: 1 } do
    validates :how_to_pay_id
    validates :rest_day_id
    validates :salon_concept_id
  end
end
