class Review < ApplicationRecord
    validates :listing_id, :body, :user_id, presence: true
    # validates :rating, :inclusion => 1..5, message: "Please include rating"
    validate :rating_message
    
    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    def created_at
        attributes['created_at'].strftime("%m/%d/%Y")
    end

    def rating_message 
        if !self.rating.between?(1, 5)
            errors.add(:rating, 'must be included') 
        end
    end

end
