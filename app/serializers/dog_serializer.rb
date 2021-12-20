class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :sex, :age, :favorite_activity, :favorite_food
  has_one :user
end
