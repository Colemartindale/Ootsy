import { connect } from 'react-redux';
import React from 'react';
import { login, resetErrors } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign in',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))} className='register-button'>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);