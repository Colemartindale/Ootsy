class Api::ReviewsController < ApplicationController

    def create
         @review = Review.new(review_params)
         if @review.save
            @listing = @review.listing
            render :show
         else
            render json: "Unable to create review", status: 422
         end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            @listing = @review.listing
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review
            @review.destroy
        else
            render json: "Unable to delete review", status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:listing_id, :body, :rating, :user_id)
    end

end
