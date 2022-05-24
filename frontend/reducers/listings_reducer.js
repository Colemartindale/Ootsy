import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from "../actions/listings_actions";

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            return Object.assign({}, action.listings);
        case RECEIVE_LISTING:
            let newState = Object.assign({}, oldState, {[action.listing.id]: Object.assign({}, action.listing)})
            delete newState[action.listing.id]['reviews']
            return newState;
        default:
            return oldState;
    };
};

export default ListingsReducer;