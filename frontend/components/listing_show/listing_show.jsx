import React from "react";
import { FaCheck, FaShippingFast, FaCartPlus } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import ReviewStarRating from "./review_star_rating";
import CreateReviewFormContainer from '../review_form/create_review_container';
import Footer from "../footer";
import { Link } from "react-router-dom";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this);
        this.state = { newQuantity: 1};
        this.updateSelect = this.updateSelect.bind(this);
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

    updateSelect() {
        const dropdownValue = parseInt(document.getElementById("quantity-select").value);
        this.setState({newQuantity: dropdownValue});
    }

    addToCart() {
        if (this.props.currentUser !== undefined) {
            const userCart = {
                user_id: this.props.currentUser.id,
                product_id: this.props.listing.id,
                quantity: 1
            }
            
            let oldQuantity;
            let result = false;

            Object.values(this.props.cart).forEach(cartItem => {
                if (cartItem.product_id === userCart.product_id) {
                    oldQuantity = cartItem.quantity;
                    userCart.id = cartItem.id;
                    result = true;
                }
            });
            
            if (result) {
                userCart.quantity = oldQuantity + this.state.newQuantity;
                this.props.editCartItem(userCart)
                .then(()=>this.props.getCartItemsById(this.props.currentUser.id));            
            } else {
                userCart.quantity = this.state.newQuantity;
                this.props.createCartItem(userCart)
                    .then(()=>this.props.getCartItemsById(this.props.currentUser.id));
            }
        } else {
            this.props.history.push("/login")
        }
    }

    render() {
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
                    <ul className={(reviews.length > 4) ? "reviews-container-l" : "reviews-container-s"} >
                        <li className="review-li">
                            {reviews.map(review => {
                                return (
                                    <div className="review-container">
                                        <CgProfile 
                                            color={(review.id % 2 === 0) ? 'cadetblue' : 'lightcoral'} 
                                            size={30} 
                                            className="prof-pic"
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
                        <select name="quantity" id="quantity-select" onChange={this.updateSelect}>
                            {this.quantityLoop().map(option => (
                                option
                            ))}
                        </select>
                    </div>
                    <Link  to='/cart' className="button-link" onClick={this.addToCart}>
                        <button className='button'>Add to Cart</button> 
                    </Link>
                    <div className="want-this">
                        <FaCartPlus size={40}/>
                        <p>Other people want this. 
                            <span>
                                {" "}{Math.floor(Math.random() * 8 + 4)}{" "} 
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