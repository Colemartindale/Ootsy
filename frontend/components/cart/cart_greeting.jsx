// import React from "react";
// import { Link } from "react-router-dom";

// class CartGreeting extends React.Component {
//     render() {
//         return (
//              <div className="cart-logo-container">
//                  <Link to='/cart'><img src={window.cartLogo} className='cart-logo' /></Link>
//              </div>
//         )
//     }
// };

// export default CartGreeting;

import React from "react";
import { Link } from "react-router-dom";

class CartGreeting extends React.Component {
    constructor(props) {
        super(props);
        // this.cartQuantity = this.cartQuantity.bind(this);
    }

    componentDidMount() {
        this.props.getCartItemsById(this.props.currentUserId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUserId && prevProps.currentUserId !== this.props.currentUserId) {
            this.props.getCartItemsById(this.props.currentUserId);
        }
    }

    // cartQuantity() {
    //     const { cartItems } = this.props;

    //     let sum = 0;

    //     cartItems.forEach(cartItem => {
    //         sum += cartItem.quantity;
    //     });

    //     return sum;
    // }

    render() {
        const { currentUserId } = this.props;
        if (currentUserId === undefined) { return null }
        return (
            <div className="cart-logo-container">
                <div onClick={ currentUserId ? () => this.props.history.push('/cart') : () => this.props.openModal('login')}>
                    <img src={window.cartLogo} className='cart-logo' />
                </div>
            </div>
        )
    }
}

export default CartGreeting;