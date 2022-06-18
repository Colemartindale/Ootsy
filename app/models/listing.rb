class Listing < ApplicationRecord
    validates :product_name, :description, :price, :quantity, :tags, :shop_id, presence: true

    has_one_attached :photo

    belongs_to :shop,
        foreign_key: :shop_id,
        class_name: :User

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem
end
