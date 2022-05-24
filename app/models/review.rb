class Review < ApplicationRecord
    validates :listing_id, :body, :rating, :user_id, presence: true
    
    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    def created_at
        attributes['created_at'].strftime("%m/%d/%Y")
    end
end
