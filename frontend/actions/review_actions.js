import * as APIReviewUtil from '../api_util/reviews';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RESET_REVIEW_ERRORS = 'RESET_REVIEW_ERRORS';


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

const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const resetErrors = errors => ({
    type: RESET_REVIEW_ERRORS
});

export const fetchReview = reviewId => dispatch => (
    APIReviewUtil.fetchReview(reviewId)
    .then(review => dispatch(receiceReview(review)))
);

export const createReview = review => dispatch => (
    APIReviewUtil.createReview(review)
        .then(review => dispatch(receiceReview(review)), 
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateReview = review => dispatch => (
    APIReviewUtil.updateReview(review)
        .then(review => dispatch(receiceReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    APIReviewUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);