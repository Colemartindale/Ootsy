import * as APIListingUtil from '../api_util/listings';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'

const receiveAllListings = listings => {
    return ({
        type: RECEIVE_ALL_LISTINGS,
        listings
    })
};

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

export const fetchListings = () => dispatch => (
    APIListingUtil.fetchListings()
        .then(listings => dispatch(receiveAllListings(listings)))
);

export const fetchListing = listingId => dispatch => (
    APIListingUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing)))
);





