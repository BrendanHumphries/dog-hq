class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :post_text, :location, :photo
  has_one :dog
  has_many :tags

  def photo
    rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end
end
