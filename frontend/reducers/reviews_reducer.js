import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_LISTING } from "../actions/listings_actions";

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, oldState, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review});
        case RECEIVE_LISTING:            
            return Object.assign({}, action.listing.reviews)
        case REMOVE_REVIEW:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.reviewId];
            return nextState;
        default:
            return oldState;
    }
};

export default ReviewsReducer;