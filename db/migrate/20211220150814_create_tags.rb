class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.integer :tag_id

      t.timestamps
    end
  end
end
