import { combineReducers } from 'redux';
import reviews from './reviews_errors_reducer';
import session from './session_errors_reducer';

export default combineReducers({
  session: session,
  reviews: reviews
});
