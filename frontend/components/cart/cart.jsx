import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cart_item";
import { ImLeaf } from "react-icons/im";

class Cart extends React.Component {
    constructor(props) {  
        super(props);

        this.calculateSubtotal = this.calculateSubtotal.bind(this);
        this.numberOfItems = this.numberOfItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDisplay = this.handleDisplay.bind(this);
        // this.formType = this.formType.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.getCartItemsById(this.props.currentUser.id);
        } else {
            this.props.history.push("/login");
        }
    }

    calculateSubtotal() {
        const { products, cartItems } = this.props;
        if (!cartItems) return null
        console.log(products, cartItems, "souh;iaeufh;aieuhfaio;euh")
        let sum = 0;

        products.forEach(product => {
            cartItems.forEach(cartItem => {
                if (cartItem.product_id === product.id) {
                    sum += product.price * cartItem.quantity;
                }
            })
        })
        console.log(sum, "bnloiwortignoeirng")
        let result = (Math.round(sum * 100) / 100).toFixed(2);
        let array = (result + "").split(".");
        let element = array[0];
        let string;

        if (element.length > 3) {
            string = element.slice(0, element.length-3) + "," + element.slice(element.length-3)
            array[0] = string;
        }

        
        return (`$${array.join('.')}`);
    }


    cartItemList() {
        const { products, cartItems, editCartItem, deleteCartItem } = this.props;
        if (!cartItems) return null

        return (
            <ul className="cart-list">
                {
                    products.map((product, i) => {
                        
                        let currentCartItem;

                        cartItems.forEach(cartItem => {
                            if (cartItem.product_id === product.id) {
                                currentCartItem = cartItem;
                            }
                        })
                        if (currentCartItem) {
                            return (
                                <CartItem 
                                    i={i}
                                    key={i}
                                    product={product}
                                    cartItem={currentCartItem}
                                    editCartItem={editCartItem}
                                    deleteCartItem={deleteCartItem}
                                />
                            )
                        }
                    })
                }
            </ul>
        )
    }

    numberOfItems() {
        if (!this.props.cartItems) return null
        let num = 0;
        this.props.cartItems.forEach(cartItem => {
            num += cartItem.quantity
        })
        return num;
    }

    handleSubmit() {

        if (this.props.products.length < 1) {return null}

        let that = this;
        this.props.cartItems.forEach(cartItem => (
                that.props.deleteCartItem(cartItem.id)
        ))
        this.props.history.push("/payment");
    }

    // handleDisplay() {
    //     if (this.props.products) {
    //         return (
    //             <div className="cart-main">
    //                 {this.cartItemList()}
    //                 {/* <div className="cart-subtotal">
    //                     <div>
    //                         Subtotal: {this.calculateSubtotal()}
    //                     </div>
    //                 </div> */}
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <Link className="cart-main" to="/">
    //                 Discover something unique to fill it up
    //             </Link>
    //         )
    //     }
    // }

    // formType() {
    //     // if (this.props.products.length < 1) {
    //     if (!this.props.products) {
    //         return "Your Cart is Empty."
    //     } else {
    //         return "Shopping Cart"
    //     }
    // }

    render() {
        if (this.props.products === undefined) {return null}

        if (!this.props.products) {
            return (
                <div className="cart-page">
                    <h1>Your cart is empty.</h1>
                    <Link to='/'>
                        Discover something unique to fill it up
                    </Link>
                    <p>
                        <ImLeaf/>
                        Etsy offsets carbon emissions from every delivery
                    </p>
                </div>
            )
        } else {
            return (
                <div className="cart-page">
                    <div className="cart-header">
                        <h1>
                            {this.numberOfItems()} 
                            {" "}
                            {(this.numberOfItems() === 1 ? "item" : "items")}
                            {" "}
                            in your cart
                        </h1>
                        <Link to="/">Keep shopping</Link>
                    </div>
                    <div className="cart-items">
                        {this.cartItemList()}
                    </div>
                    <div className="cart-payment">
                        <div className="payment-top">
                            <h1>How you'll pay</h1>
                            <div className="payment-inputs-container">

                            </div>
                            <div className="payment-total">
                                {this.calculateSubtotal()}
                            </div>
                        </div>
                        <div className="payment-mid">
                            <div className="shipping-container">
                                <h1>Shipping</h1>
                                <h2>(To United States)</h2>
                            </div>
                            <h3>FREE</h3>
                        </div>
                        <div className="payment-bottom">
                            <button>Proceed to checkout</button>
                            <p>*Additional duties and taxes may apply</p>
                        </div>
                    </div>
                    <p>
                        <ImLeaf/>
                        Etsy offsets carbon emissions from every delivery
                    </p>
                    {/* <div className="cart-container">
                        <div className="cart-center-col">
                            <div className="cart-headline">
                                <h1>Shopping Cart</h1>   
                            </div>
                            {this.handleDisplay()}
                        </div>
                        <div className="cart-right-col">
                            <div className="cart-subtotal-card">
                                <div className="cart-subtotal-headline">
                                    <h1>Subtotal {this.numberOfItems()}: {this.calculateSubtotal()}</h1>
                                </div>
                                    <button onClick={this.handleSubmit} className="checkout">Proceed to checkout</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            )
        }
        return ("hey")
    }
}

export default Cart;