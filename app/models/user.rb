class User < ApplicationRecord
    has_many :dogs
    has_many :favorite_breeds
    has_many :breeds, through: :favorite_breeds

    has_one_attached :profile_photo

    has_secure_password
end
