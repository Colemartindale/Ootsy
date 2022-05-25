import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ListingFormReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.reviewId ? action.reviewId : null
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default ListingFormReducer;
