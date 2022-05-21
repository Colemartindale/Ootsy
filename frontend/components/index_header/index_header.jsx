import React from "react";
import { Link } from "react-router-dom";

class ListingIndexHeader extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        console.log(this.props)
        if (!this.props.listings || this.props.listings.length < 10) {
            return null
        };
        const { listings } = this.props
        return (
            <div className="index-header-container">
                    <span>Welcome Text</span>
                <div className="index-header">
                    <ul className="prof-ul">
                        <li>
                            <img src={listings[3].photoUrl} alt='jewelry' onClick={() => this.props.history.push(`/listings/category/accessories`)}/>
                            <span>Jewelry</span>
                        </li>
                        <li>
                            <img src={listings[10].photoUrl} alt='clothing' onClick={() => this.props.history.push(`/listings/category/clothes`)}/>
                            <span>Clothing</span>
                        </li>
                        <li>
                            <img src={listings[15].photoUrl} alt='home' onClick={() => this.props.history.push(`/listings/category/home`)}/>
                            <span>Decor</span>
                        </li>
                        <li>
                            <img src={listings[24].photoUrl} alt='toys' onClick={() => this.props.history.push(`/listings/category/toys`)}/>
                            <span>Toys</span>
                        </li>
                        <li>
                            <img src={listings[37].photoUrl} alt='smash' onClick={() => this.props.history.push(`/listings/category/smash`)}/>
                            <span>Smash Bros</span>
                        </li>
                        <li>
                            <img src={listings[43].photoUrl} alt='electronics' onClick={() => this.props.history.push(`/listings/category/electronics`)}/>
                            <span>Electronics</span>
                        </li>             
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListingIndexHeader;