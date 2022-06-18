json.cartItems do
    @cart_items.each do |cart_item| 
        json.set! cart_item.id do
            json.partial! 'api/cart_items/cart_item', cart_item: cart_item
        end
    end
end

json.products do
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :product_name, :description, :price, :category, :quantity, :tags, :shop_id, :rating
            json.shop_name product.shop.shop_name
            if product.photo.attached?
                json.photoUrl url_for(product.photo) 
            else
                json.photoUrl ""
            end
        end
    end
end