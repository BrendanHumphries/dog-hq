class FavoriteBreedSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :breed
end
