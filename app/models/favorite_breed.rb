class FavoriteBreed < ApplicationRecord
  belongs_to :user
  belongs_to :breed
end
