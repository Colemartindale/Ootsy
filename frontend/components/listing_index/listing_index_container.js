import { connect } from "react-redux";
import { fetchListings } from "../../actions/listings_actions"; 
import ListingIndex from './listing_index';

const mSTP = state => {
    return { listings: Object.values(state.entities.listings) }
};

const mDTP = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings())
    }
};

export default connect(mSTP, mDTP)(ListingIndex);