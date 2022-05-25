import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    console.log(state)
    return ({
    review: {body: '', rating: ''},
    formType: 'Add Review',
    currentUser: state.session.currentUser,
    listing: state.entities.listings[ownProps.match.params.listingId]
    });
}

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)) 
});
  
export default withRouter(connect(mSTP, mDTP)(ReviewForm)) ;
  