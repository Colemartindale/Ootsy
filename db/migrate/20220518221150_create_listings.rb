class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.integer :quantity, null: false
      t.string :tags, null: false
      t.integer :shop_id, null: false 
      t.timestamps
    end
    add_index :listings, [:category, :shop_id, :product_name], unique: true
  end
end


# post = Listing.create(product_name: 'smash bros', description: 'fun', price: 12.88, category_id: 3, quantity: 5, tags: 'toys, cows', shop_id: 1)