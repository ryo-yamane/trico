class SalonConcept < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '施術中は一人だけ！完全プライベートサロン' },
    { id: 3, name: 'リラックスできる個室ありサロン' },
    { id: 4, name: '気軽に通えるアットホームなサロン' },
    { id: 5, name: 'くつろげる上質空間が自慢のサロン' },
    { id: 6, name: 'おしゃれなインテリアが自慢のサロン' },
    { id: 7, name: '予約カレンダーを参照してください' }   
  ]
  include ActiveHash::Associations
  has_many :owners
end