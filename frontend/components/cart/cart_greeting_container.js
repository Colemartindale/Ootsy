import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCartItemsById } from "../../actions/cart_actions";
import CartGreeting from "./cart_greeting";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({
    cartItems: Object.values(state.entities.cart),
    currentUserId: state.session.currentUser ? state.session.currentUser.id : null
})

const mDTP = dispatch => ({
    getCartItemsById: userId => dispatch(getCartItemsById(userId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(CartGreeting));