class TagSerializer < ActiveModel::Serializer
  attributes :id, :tag_id
  has_one :post
end
