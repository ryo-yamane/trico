class HowToPay < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '現金のみ' },
    { id: 3, name: '現金・クレジットカード' },
    { id: 4, name: '現金・クレジットカード・PayPay' },
    { id: 5, name: '現金・クレジットカード・PayPay・楽天Pay' }
  ]
  include ActiveHash::Associations
  has_many :owners
end