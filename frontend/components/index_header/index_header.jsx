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
        if (!this.props.listings || this.props.listings.length < 53) {
            return null
        };

        const { listings, currentUser } = this.props
        let welcomeMsg;
        if (currentUser) {
            welcomeMsg = `Welcome back, ${currentUser.username}!`
        } else {
            welcomeMsg = 'Step into Spring with cheerful finds from small shops.'
        }
        return (
            <div className="index-header-container">
                    <span className="header-welcome">{welcomeMsg}</span>
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
                            <img src={listings[27].photoUrl} alt='toys' onClick={() => this.props.history.push(`/listings/category/toys`)}/>
                            <span>Toys</span>
                        </li>
                        <li>
                            <img src={listings[39].photoUrl} alt='smash' onClick={() => this.props.history.push(`/listings/category/smash`)}/>
                            <span>Smash</span>
                        </li>
                        <li>
                            <img src={listings[42].photoUrl} alt='electronics' onClick={() => this.props.history.push(`/listings/category/electronics`)}/>
                            <span>Electronics</span>
                        </li>             
                    </ul>
                </div>
            </div>
        )
    }
};

export default ListingIndexHeader;