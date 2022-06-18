import React from "react";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            quantity: this.props.product.quantity
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        // this.handleQuantity = this.handleQuantity.bind(this);
        // this.dynamicId = this.dynamicId.bind(this);
        // this.handleDropdown = this.handleDropdown.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    deleteItem() {
        this.props.deleteCartItem(this.props.cartItem.id);
    }

    // handleQuantity() {
    //     const dropdown = document.getElementById(`quantity-${this.props.i}`);
    //     this.setState({id: this.props.cartItem.id, quantity: dropdown.value}, 
    //         ()=>this.props.editCartItem(this.state));
    // }

    // dynamicId() {
    //     return `quantity-${this.props.i}`;
    // }

    // handleDropdown() {
    //     if (this.props.cartItem.quantity < 10) {
    //         return this.props.cartItem.quantity;
    //     } else {
    //         return 10;
    //     }
    // }

    handleDate() {
        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getDate() + 7}/${current.getFullYear()}`;

        return (
            <div className="date">
                <h1>Estimated delivery:{" "}{date}</h1>
            </div>
        );
    }

    render() {
        const { product, cartItem } = this.props;
        
        return (
            <li className="cart-item">
                <div className="cart-item-content-container">
                    <Link to={`/listings/${product.id}`} className="img-container">
                        <img className="cart-item-img" src={product.photoUrl} alt="photo" />
                    </Link>
                    <div className="text-container">
                        <div className="text-left">
                            <Link to={`/listings/${product.id}`}>{product.product_name}</Link>
                            <div className="left-bottom">
                                <p>
                                    Quantity:{" "}{cartItem.quantity}
                                </p>
                                <a onClick={this.deleteItem} className="cart-item-remove">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="text-right">
                            <div>
                                <p className="total-price">
                                    ${product.price * cartItem.quantity}
                                </p>
                                <p className="unit-price">
                                    {(cartItem.quantity > 1) ? (`($${product.price} each)`) : null}
                                </p>
                            </div>
                            <p className="people-cart">
                                {" "}{Math.floor(Math.random() * 8 + 4)}{" "} 
                                {"people have this in their cart."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cart-item-gift-container">
                    <label htmlFor="" className="checkbox-container">
                        <input type="checkbox" />
                        This order is a gift 
                    </label>
                    <p>Prices will not be shown on packing slip</p>
                </div>
                <div className="cart-item-bottom">
                    <div className="text-container">
                        <textarea 
                            placeholder={`Add a note to ${product.shop_name} (optional)`} 
                            id="textarea" 
                            cols="30" 
                            rows="10"
                        >
                        </textarea>
                    </div>
                    {this.handleDate()}
                </div>
            </li>
        )
    }
    
}

export default CartItem;