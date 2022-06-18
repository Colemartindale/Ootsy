import * as cartItemsApiUtil from "../api_util/cart"

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const updateCartItem = cartItem => ({
    type: UPDATE_CART_ITEM,
    cartItem
})

const removeCartItem = cartItem => ({
    type: REMOVE_CART_ITEM,
    cartItem
})

export const getCartItemsById = userId => dispatch => (
    cartItemsApiUtil.fetchCartItemsById(userId)
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const createCartItem = cartItem => dispatch => (
    cartItemsApiUtil.postCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const editCartItem = cartItem => dispatch => (
    cartItemsApiUtil.updateCartItem(cartItem)
        .then(cartItem => dispatch(updateCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    cartItemsApiUtil.destroyCartItem(cartItemId)
        .then(cartItem => dispatch(removeCartItem(cartItem)))
)