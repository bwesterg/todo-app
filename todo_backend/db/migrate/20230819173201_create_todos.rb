class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :content
      t.boolean :urgent
      t.boolean :done

      t.timestamps
    end
  end
end
