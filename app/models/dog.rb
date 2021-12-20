class Dog < ApplicationRecord
  belongs_to :user
  has_many :posts
  has_many :friends

  has_one_attached :profile_photo
end
