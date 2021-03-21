class RestDay < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '月' },
    { id: 3, name: '火' },
    { id: 4, name: '水' },
    { id: 5, name: '木' },
    { id: 6, name: '金' },
    { id: 7, name: '土' },
    { id: 8, name: '日' },
    { id: 9, name: '予約カレンダーを参照してください' }   
  ]
  include ActiveHash::Associations
  has_many :owners
end