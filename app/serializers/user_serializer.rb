class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :username, :email, :profile_photo
  has_many :dogs
  has_many :favorite_breeds

  def profile_photo
    rails_blob_path(object.profile_photo, only_path: true) if object.profile_photo.attached?
  end
end
