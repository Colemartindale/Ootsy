class Api::ListingsController < ApplicationController
    def index
        if params[:category]
            @listings = Listing.where(category: params[:category])
            render :category_index
        elsif params[:query] 
            @listings = Listing.where("product_name LIKE ?", "% " + "%" + params[:query] + "%" + " %")
                        .or(Listing.where("product_name LIKE ?", "%" + params[:query] + "%"))
                        .or(Listing.where("product_name LIKE ?", "%" + params[:query].capitalize + "%"))
                        .or(Listing.where("product_name LIKE ?", "%" + params[:query].upcase + "%"))
                        .or(Listing.where("product_name LIKE ?", "%" + params[:query].downcase + "%"))
                        .or(Listing.where("tags LIKE ?", "% " + "%" + params[:query] + "%" + " %"))
                        .or(Listing.where("tags LIKE ?", "%" + params[:query] + "%"))
                        # .or(Listing.where("description LIKE ?", "% " + "%" + params[:query] + "%" + " %"))
                        # .or(Listing.where("description LIKE ?", "%" + params[:query] + "%"))
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
