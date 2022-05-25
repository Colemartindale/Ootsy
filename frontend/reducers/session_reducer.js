import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullUser = Object.freeze({
  currentUser: {id: null}
});

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return {currentUser: currentUser}
    case LOGOUT_CURRENT_USER:
      return Object.freeze({currentUser: null});
    default:
      return state;
  }
};

export default sessionReducer;
