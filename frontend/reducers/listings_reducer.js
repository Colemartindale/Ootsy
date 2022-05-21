import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from "../actions/listings_actions";

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            console.log(action)
            return Object.assign({}, action.listings);
        case RECEIVE_LISTING:
            return Object.assign({}, oldState, {[action.listing.id]: action.listing})
        default:
            return oldState;
    };
};

export default ListingsReducer;