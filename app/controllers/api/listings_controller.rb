class Api::ListingsController < ApplicationController
    def index
        if params[:category]
            @listings = Listing.where(category: params[:category])
            render :category_index
        else
            @listings = Listing.all
            render :index
        end
    end

    def show
        @listing = Listing.find_by(id: params[:id])
        render :show
    end

end
