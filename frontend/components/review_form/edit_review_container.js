import { connect } from 'react-redux';
import { updateReview, fetchListing } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { resetErrors, fetchReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditForm from './edit_form';


const mSTP = (state, ownProps) => {
    return ({
        review: state.entities.reviews[state.ui.reviewId],
        reviewId: state.ui.reviewId,
        formType: 'Edit Review',
        currentUser: state.session.currentUser,
        errors: state.errors.reviews
    });
}

const mDTP = (dispatch, ownProps) => ({
    // fetchListing: () => dispatch(fetchListing(ownProps.match.params.listingId)),
    closeModal: () => dispatch(closeModal()),
    action: review => dispatch(updateReview(review)),
    resetErrors: () => dispatch(resetErrors()),
    fetchReview: reviewId => dispatch(fetchReview(reviewId))
});
  
export default withRouter(connect(mSTP, mDTP)(EditForm)) ;
  