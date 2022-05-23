class AddShopName < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :shop_name, :string
    add_index :users, :shop_name, unique: true
  end
end
