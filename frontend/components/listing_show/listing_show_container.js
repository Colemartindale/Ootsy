import { connect } from "react-redux";
import { fetchListing } from "../../actions/listings_actions"; 
import ListingShow from "./listing_show";
import { deleteReview, resetErrors } from "../../actions/review_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ( state, ownProps ) => {
    return { 
        listing: state.entities.listings[ownProps.match.params.listingId],
        reviews: Object.values(state.entities.reviews),
        currentUser: state.session.currentUser
    }
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchListing: () => dispatch(fetchListing(ownProps.match.params.listingId)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        resetErrors: () => dispatch(resetErrors()),
        openModal: (modal, reviewId) => dispatch(openModal(modal, reviewId)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mSTP, mDTP)(ListingShow);