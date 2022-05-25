import { combineReducers } from 'redux';
import modal from './modal_reducer';
import reviewId from './listing_form_id_reducer';

export default combineReducers({
  modal,
  reviewId
});
