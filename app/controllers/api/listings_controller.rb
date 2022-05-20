class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

    # private
    # def listings_params
    #     params.require(:listing).permit(:email, :password)
    # end
end
