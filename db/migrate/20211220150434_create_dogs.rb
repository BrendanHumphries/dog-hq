class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :breed
      t.string :sex
      t.integer :age
      t.string :favorite_activity
      t.string :favorite_food

      t.timestamps
    end
  end
end
