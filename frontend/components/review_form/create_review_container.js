import { connect } from 'react-redux';
import { createReview, fetchListing } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { resetErrors } from '../../actions/review_actions';


const mSTP = (state, ownProps) => {
    return ({
        review: {body: '', rating: ''},
        formType: 'Add Review',
        currentUser: state.session.currentUser,
        listing: state.entities.listings[ownProps.match.params.listingId],
        errors: state.errors.reviews
    });
}

const mDTP = (dispatch, ownProps) => ({
    fetchListing: () => dispatch(fetchListing(ownProps.match.params.listingId)),
    action: review => dispatch(createReview(review)),
    openModal: modal => dispatch(openModal(modal)),
    resetErrors: () => dispatch(resetErrors())
});
  
export default withRouter(connect(mSTP, mDTP)(ReviewForm)) ;
  