import { connect, Connect } from "react-redux";
import CategoryIndex from "./category_index";
import { fetchListingsByCategory } from "../../actions/listings_actions";

const mSTP = ( state, ownProps ) => ({
    category: ownProps.match.params.category,
    listings: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
    fetchListingsByCategory: category => dispatch(fetchListingsByCategory(category))
})

export default connect(mSTP, mDTP)(CategoryIndex);