class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :dog, null: false, foreign_key: true
      t.string :post_text
      t.string :location

      t.timestamps
    end
  end
end
