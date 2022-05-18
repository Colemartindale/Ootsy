import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
    render() {
        return (
             <div className="cart-logo-container">
                 <Link to='/cart'><img src={window.cartLogo} className='cart-logo' /></Link>
             </div>
        )
    }
};

export default Cart;