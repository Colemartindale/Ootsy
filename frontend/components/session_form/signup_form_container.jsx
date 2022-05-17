import { connect } from 'react-redux';
import React from 'react';
import { signup, resetErrors } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))} className='register-button'>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
