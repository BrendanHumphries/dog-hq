class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :password_digest
  has_many :dogs
  has_many :favorite_breeds
end
