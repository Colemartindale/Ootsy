import { RECEIVE_SESSION_ERRORS, RESET_SESSION_ERRORS } from '../actions/session';
import { CLOSE_MODAL } from '../actions/modal_actions';
  
export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RESET_SESSION_ERRORS:
        return []
      case CLOSE_MODAL:
        return [];
      default:
        return state;
    }
};
  