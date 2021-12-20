class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.belongs_to :dog, null: false, foreign_key: true
      t.integer :friend_id

      t.timestamps
    end
  end
end
