json.extract! @listing, :id, :product_name, :description, :price, :category, :quantity, :tags
json.shop_name @listing.shop.shop_name

if @listing.photo.attached?
    json.photoUrl url_for(@listing.photo) 
else
    json.photoUrl ""
end