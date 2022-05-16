import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    entities: entities_reducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default RootReducer;