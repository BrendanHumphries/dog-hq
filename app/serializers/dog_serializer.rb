class DogSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :breed, :sex, :age, :favorite_activity, :favorite_food, :profile_photo
  has_one :user
  has_many :posts
  has_many :friends

  def profile_photo
    rails_blob_path(object.profile_photo, only_path: true) if object.profile_photo.attached?
  end
end