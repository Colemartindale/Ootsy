import * as APIReviewUtil from '../api_util/reviews';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiceReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

// export const fetchReviews = () => dispatch => (
//     APIReviewUtil.
// )

export const createReview = review => dispatch => (
    APIReviewUtil.createReview(review)
        .then(review => dispatch(receiceReview(review)))
);

export const updateReview = review => dispatch => (
    APIReviewUtil.updateReview(review)
        .then(review => dispatch(receiceReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    APIReviewUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);