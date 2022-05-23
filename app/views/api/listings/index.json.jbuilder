@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :price, :id, :category, :product_name
        if listing.photo.attached?
            json.photoUrl url_for(listing.photo)
        else
            json.photoUrl ""
        end
    end
end