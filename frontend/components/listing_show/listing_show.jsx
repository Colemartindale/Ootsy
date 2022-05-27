import React from "react";
import { FaCheck, FaShippingFast, FaCartPlus } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import ReviewStarRating from "./review_star_rating";
import CreateReviewFormContainer from '../review_form/create_review_container';
import Footer from "../footer";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListing();
        this.props.resetErrors();
    };

    quantityLoop() {
        let options = [];
        for (let i = 1; i <= this.props.listing.quantity; i++) {
            options.push(<option value={i}>{i}</option>) 
        };
        return options;
    };

    buttonShow(userId, review) {
        if ((this.props.currentUser) && (userId === this.props.currentUser.id)) {
            return (
                <span className="edit-delete">
                    <button className="delete" onClick={() => this.props.deleteReview(review.id)}>
                        delete
                    </button>
                    <button className="edit" onClick={() => this.props.openModal('edit', review.id)}>edit</button>
                </span>
            )
        };
    };

    render() {
        // console.log(this.props.listing, 'hi')
        const { listing, reviews } = this.props;

        if (!listing) {
            return null
        };

       let avgReview = 0;
       reviews.forEach(review => {
           avgReview += review.rating
       });
       let avgReviewRating = Math.floor(avgReview / reviews.length)

        return(
            <div className="show-container">
                <div className="img-reviews-container">
                    <div className="img-container">
                        <img src={listing.photoUrl} alt="img" className="show-img" />
                        <div className="avg-review">
                            {reviews.length}{" "}
                            {(reviews.length === 1) ? 'review' : 'reviews'}
                            <span><ReviewStarRating rating={avgReviewRating} /></span>
                        </div>
                    </div>
                    <div className="form-container">
                        <CreateReviewFormContainer/>
                    </div>
                    <ul className="reviews-container" 
                        style={(reviews.length > 4) ? {height: 500, overflowY: 'scroll'} : {height: 250}}
                    >
                        <li className="review-li">
                            {reviews.map(review => {
                                return (
                                    <div className="review-container">
                                        <CgProfile 
                                            color={(review.id % 2 === 0) ? 'cadetblue' : 'lightcoral'} size={30} className="prof-pic"
                                        />
                                        <div className="review-content">
                                            <span className="name">{review.authorName}</span>
                                            <span className="date">{review.createdAt}</span>
                                            {this.buttonShow(review.userId, review)}
                                            <ReviewStarRating className="stars" rating={review.rating}/>
                                            <p className="review">{review.body}</p>    
                                        </div>
                                    </div>
                                )
                            })}
                        </li>
                    </ul>
                </div>
                <div className="details-container">
                    <span className="shop-name">{listing.shop_name}</span>
                    <span className="product-name">{listing.product_name}</span>
                    <div className="price-stock-container">
                        <span className="price">${listing.price}</span>
                        <span className={ (listing.quantity > 3) ? 'green' : 'red'}>
                            {(listing.quantity > 3) ? <FaCheck/> : ""}
                            {" "}
                            {(listing.quantity > 3) ? `in stock` : `only ${listing.quantity} left` }
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
                    <div className="want-this">
                        <FaCartPlus size={40}/>
                        <p>Other people want this. 
                            <span>{" "}{Math.floor(Math.random() * 8 + 4)}{" "} 
                                {"people have this in their carts right now."}
                            </span>
                        </p> 
                    </div>
                    <div className="ships-fast">
                        <FaShippingFast size={40}/>
                        <p>Hooray!{" "}
                            <span>This item ships free.</span>
                        </p>
                    </div>
                    <span className='description'>Description:
                        <br />
                        <br />
                        <p>{listing.description}</p>
                    </span>
                </div>
            </div>
        )
    }
};

export default ListingShow;