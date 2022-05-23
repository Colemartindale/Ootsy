import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    listings: ListingsReducer,
    reviews: ReviewsReducer
});

export default entitiesReducer;