class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :api_id
  has_many :favorite_breeds
end
