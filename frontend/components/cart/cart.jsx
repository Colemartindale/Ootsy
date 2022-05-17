import React from "react";


class Cart extends React.Component {
    render() {
        return (
             <div className="cart-logo-container">
                 <img src={window.cartLogo} className='cart-logo' />
             </div>
        )
    }
};

export default Cart;