class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_text, :location
  has_one :dog
  has_many :tags
end
