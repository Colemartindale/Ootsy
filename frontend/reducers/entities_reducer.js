import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: ListingsReducer
});

export default entitiesReducer;