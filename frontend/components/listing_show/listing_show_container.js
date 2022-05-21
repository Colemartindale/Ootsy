import { connect } from "react-redux";
import { fetchListing } from "../../actions/listings_actions"; 
import ListingShow from "./listing_show";

const mSTP = ( state, ownProps ) => {
    return { 
        listing: state.entities.listings[ownProps.match.params.listingId]
    }
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchListing: () => dispatch(fetchListing(ownProps.match.params.listingId))
    }
};

export default connect(mSTP, mDTP)(ListingShow);