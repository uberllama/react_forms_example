# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  title       :string           not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base

  belongs_to :category

  validates :body, presence: true
  validates :category_id, presence: true
  validates :title, presence: true
end
