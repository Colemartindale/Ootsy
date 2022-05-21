import { connect } from "react-redux";
import { fetchListings } from "../../actions/listings_actions"; 
import ListingIndexHeader from './index_header';
import { withRouter } from "react-router-dom";

const mSTP = state => {
    return { listings: Object.values(state.entities.listings) }
};

const mDTP = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings())
    }
};

export default withRouter(connect(mSTP, mDTP)(ListingIndexHeader));