class Breed < ApplicationRecord
    has_many :favorite_breeds
    has_many :users, through: :favorite_breeds
end
