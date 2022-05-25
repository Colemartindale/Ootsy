json.extract! @review, :rating, :id, :body
json.listingId @review.listing_id
json.userId @review.user_id
json.createdAt @review.created_at
json.authorName @review.user.username 