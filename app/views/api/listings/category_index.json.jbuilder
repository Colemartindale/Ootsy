@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :product_name, :price, :shop_id, :category 
        if listing.photo.attached?
            json.photoUrl url_for(listing.photo)
        else
            json.photoUrl ""
        end
        json.shop_name listing.shop.shop_name
    end
end