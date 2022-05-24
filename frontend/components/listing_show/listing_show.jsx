import React from "react";
import StarRating from "./star_rating";
import { FaCheck } from 'react-icons/fa';

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListing()
    }

    quantityLoop() {
        let options = [];
        for (let i = 1; i < this.props.listing.quantity; i++) {
            options.push(<option value={i}>{i}</option>) 
        };
        return options;
    };

    render() {
        // console.log(this.props.listing, 'hi')
        const { listing } = this.props;

        if (!listing) {
            return null
        };

        if (!listing.reviews) {
            return null
        };

        return(
            <div className="show-container">
                <div className="img-reviews-container">
                    <div className="img-container">
                        <img src={listing.photoUrl} alt="img" className="show-img" />
                        <div className="avg-review">
                            {listing.reviews.length} {(listing.reviews.length === 1) ? 'review' : 'reviews'}
                        </div>
                    </div>
                    <StarRating className='star'/>
                    <ul className="reviews-container">
                        {listing.reviews.map(review => {
                            // console.log(Object.values(review), 'hehehheheheh')
                            return <li>{Object.values(review)[0].body}</li>    
                        })}
                    </ul>
                </div>
                <div className="details-container">
                    <span className="shop-name">{listing.shop_name}</span>
                    <span className="product-name">{listing.product_name}</span>
                    <div className="price-stock-container">
                        <span className="price">${listing.price}</span>
                        <span className={ (listing.quantity > 3) ? 'green' : 'red'}>
                            {(listing.quantity > 3) ? <FaCheck/> : ""}{" "}{(listing.quantity > 3) ? `in stock` : `only ${listing.quantity} left` }
                        </span>
                    </div>
                    <div className="quantity-container">
                        <select name="quantity" id="quantity-select">
                            {this.quantityLoop().map(option => (
                                option
                            ))}
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