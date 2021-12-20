class FriendSerializer < ActiveModel::Serializer
  attributes :id, :friend_id
  has_one :dog
end
