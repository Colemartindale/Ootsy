import { connect } from "react-redux";
import { createCartItem, deleteCartItem, editCartItem, getCartItemsById } from "../../actions/cart_actions";
import Cart from "./cart";

const mSTP = state => ({
    cartItems: state.entities.cart.cartItems ? Object.values(state.entities.cart.cartItems) : null,
    products: state.entities.cart.products ? Object.values(state.entities.cart.products) : null,
    currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
    getCartItemsById: userId => dispatch(getCartItemsById(userId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    editCartItem: cartItem => dispatch(editCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
})

export default connect(mSTP,mDTP)(Cart);