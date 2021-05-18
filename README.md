# README
・アプリ名	trico
　∟ユーザー・・・予約機能、レビュー投稿、クーポン取得、サロン紹介ページ閲覧、
　　サロン・・・・スケジュール管理、クーポン作成、メニュー作成、ユーザーが閲覧するサロンページに店のインスタ投稿を掲載　
　
＊このアプリケーションの最終型は、ZOZOが運営しているwearのような髪型とネイルデザインに特化したSNSの様なサービスにしたい。

・制作背景(意図)

現状
　ホットペッパービューティーが美容カテゴリのアプリケーションで一番大きくシェア（約17％）を持っている。
　サイト内で掲載順位を上げるためには、広告料金を多く払わなければならない。→資本力がある大手しか上位に残らない仕組み。
  男女でネット予約（スマホ・PC・モバイル）をするユーザーはまだ全体の50％しかいない。

コロナ禍における変化
  以前までは、ホットペッパービューティーでデザインの確認→予約まで完結していたが、
  最近の傾向としては、SNSでデザインを探して、SNSで予約をするというフローができている。
  またホットペッパーで集客しなくても小規模のサロンや、プライベートサロンなどはSNSで集客が可能で、ホットペッパービューティーを離れる店も増えている。
  感染が気になるため、中規模以上の店舗ではなく、人とあまり接触しないプライベートサロンなどの小規模店舗の需要が上がっている。

ターゲット（ペルソナ）
  一定以上のランクのプライベートサロンの経営者
  SNSを活用して集客している店舗（フォロワー〇〇人以上）

コンセプト
　　予約サービス一休の様なハイグレードのサロンだけを取り扱ったサイト
　　ホットペッパービューティー、ミニモ、LIPSとは違った高級感のあるデザイン
　　

・DEMO(gifで動画や写真を貼って、ビューのイメージを掴んでもらいます)						
⇒できている範囲で貼り付けましょう。						
・実装予定の内容						
　∟ユーザー・・・会員登録機能、ログイン機能、レビュー投稿、クーポン取得、サロン紹介ページ閲覧、予約機能
　　サロン・・・・管理画面（予約、クーポン作成、メニュー作成、SNS投稿連携）

DEMO画面
トップページ〜ユーザー新規登録画面
[![Image from Gyazo](https://i.gyazo.com/d115b143087e7f73d0a01108dfd24873.gif)](https://gyazo.com/d115b143087e7f73d0a01108dfd24873)

ユーザーサインイン〜会員トップページ
[![Image from Gyazo](https://i.gyazo.com/74f3ea06994d303a7972d9f995badb8a.gif)](https://gyazo.com/74f3ea06994d303a7972d9f995badb8a)

会員ログアウト挙動
[![Image from Gyazo](https://i.gyazo.com/07858e75451255418cb5ed9c90ed0288.gif)](https://gyazo.com/07858e75451255418cb5ed9c90ed0288)

・DB設計						
## users テーブル

| Column             | Type       | Options     |
| ------------------ | -----------| ----------- |
| nickname           | string     | null: false |
| first_name         | string     | null: false |
| last_name          | string     | null: false |
| first_name_kana    | string     | null: false |
| last_name_kana     | string     | null: false |
| email              | string     | null: false , unique: true|
| encrypted_password | string     | null: false |
| birthday           | date       | null: false |


### Association
has_many :comments
has_many :bookings


##  salonsテーブル

| Column                | Type          | Options     |
| ----------------      | ------------- | ----------- |
| owner_first_name      | string        | null: false |
| owner_last_name       | string        | null: false |
| owner_first_name_kana | string        | null: false |
| owner_last_name_kana  | string        | null: false |
| salon_name            | string        | null: false |
| salon_name            | string        | null: false |
| address               | string        | null: false |
| phone_number          | string        | null: false |
| how_to_pay_id         | integer       | null: false |
| salon_concept_id      | integer       | null: false |
| nearest_station       | string        | null: false |
| rest_day_id           | integer       | null: false |
| sns_account           | text          | null: false |


### Association
has_many :bookings
has_many :menus
has_many :comments
has_one :schedule



## menu テーブル

| Column                        | Type       | Options      |
| ----------------------------- | ---------- | ------------ |
| menu_name                     | string     | null: false  |
| menu_price                    | integer    | null: false  |
| menu_content                  | text       | null: false  |
| salon                         | references | null: false,foreign_key: true  |

### Association
belongs_to :salon




## bookings テーブル

| Column                        | Type        |Options                       |
| ----------------------------- | ----------  | ---------------------------- |
| user                          | references  |null: false, foreign_key: true|
| salon                         | references  |null: false, foreign_key: true|
| menu                          | references  |null: false, foreign_key: true|


### Association
belongs_to :user
belongs_to :salon
belongs_to :menu

## comments テーブル

| Column                        | Type        |Options                       |
| ----------------------------- | ----------  | ---------------------------- |
| text                          | text        |null: false                   |
| user                          | references  |null: false, foreign_key: true|
| salon                         | references  |null: false, foreign_key: true|


### Association
belongs_to :user
belongs_to :salon

## schedule テーブル

| Column                        | Type        |Options                       |
| ----------------------------- | ----------  | ---------------------------- |
| booking                       | references  |null: false, foreign_key: true|
| salon                         | references  |null: false, foreign_key: true|


### Association
belongs_to :salon
