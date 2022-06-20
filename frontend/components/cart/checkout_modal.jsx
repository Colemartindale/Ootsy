import React from "react";
import { Link } from "react-router-dom";

class CheckoutModal extends React.Component {
    constructor(props) {
        super(props)  
    };

    render() {
        return (
            <div className="checkout-modal">
                <h1>Thanks for using Ootsy!</h1>
                <p>Checkout is for demonstration only</p>
                <h2>
                    Take a look at my portfolio if you 
                    enjoyed your experience with Ootsy
                </h2>
                <Link to={"#"}>Cole's Portfolio</Link>
            </div>
        )
    }
};

export default CheckoutModal;