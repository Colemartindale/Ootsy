json.extract! @listing, :id, :product_name, :description, :price, :category, :quantity, :tags
json.shop_name @listing.shop.shop_name
json.reviews do 
    @listing.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :id, :body
            json.listingId review.listing_id
            json.userId review.user_id
            json.createdAt review.created_at
            json.authorName review.user.username 
        end
    end
end
if @listing.photo.attached?
    json.photoUrl url_for(@listing.photo) 
else
    json.photoUrl ""
end