import React from "react";
import StarRating from "./star_rating";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListing()
    }

    render() {
        // console.log(this.props.listing, 'hi')
        const { listing } = this.props;

        if (!this.props.listing) {
            return null
        };

        return(
            <div className="show-container">
                <div className="img-reviews-container">
                    <div className="img-container">
                        <img src={listing.photoUrl} alt="img" className="show-img" />
                    </div>
                    <div className="reviews-container">
                        <StarRating/>
                    </div>
                </div>
                <div className="details-container">
                    <span className="shop-name">{listing.shop_name}</span>
                    <span className="product-name">{listing.product_name}</span>
                    <span className="price">${listing.price}</span>
                    <div className="quantity-container">
                        
                        <select name="quantity" id="quantity-select">
                            
                        </select>
                    </div>
                    <button>Add to Cart</button>
                    <span className='description'>Description:
                        <br />
                        <br />
                        {listing.description}
                    </span>
                </div>
            </div>
        )
    }
};

export default ListingShow;