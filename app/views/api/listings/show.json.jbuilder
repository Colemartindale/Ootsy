json.extract! @listing, :id, :product_name, :description, :price, :category, :quantity, :tags
json.shop_name @listing.shop.shop_name
json.reviews @listing.reviews.each do |review|
    json.set! review.id do
        json.extract! review, :listing_id, :rating, :id, :user_id, :body
    end
end
if @listing.photo.attached?
    json.photoUrl url_for(@listing.photo) 
else
    json.photoUrl ""
end