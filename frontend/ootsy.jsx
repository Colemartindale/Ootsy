import React from "react";
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session';
import * as APIListingUtil from './api_util/listings';
import * as ListingActions from './actions/listings_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.APIListingUtil = APIListingUtil;
    window.ListingActions = ListingActions;
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }   
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});

