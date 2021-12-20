class Post < ApplicationRecord
  belongs_to :dog
  has_many :tags

  has_one_attached :photo
end
