import React from "react";
import IndexHeaderContainer from '../index_header/index_header_container'
import { BsArrowRight } from 'react-icons/Bs';
import { FaShippingFast } from 'react-icons/Fa';
import { Link } from 'react-router-dom';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    };
    
    componentDidMount() {
        this.props.fetchListings()
    };
    
    render() {
        if (this.props.listings.length === 0 || this.props.listings.length < 3) {
            return null
        };
        const { listings } = this.props;

        return (
            <div className="index-page">
                <IndexHeaderContainer />
                <div className="home-section">
                    <ul id="home-ul">
                        <span className="cat">Home & Living</span>
                        <Link className="cat-link" to='/listings/category/home'>
                            Shop these unique finds 
                            <BsArrowRight size={20} className='arrow'/>
                        </Link>
                        {listings.map((listing, i) => {
                            if (listing.category === 'home') {
                                return (
                                    <div className={`pic${i - 13}`} 
                                        onClick={() => this.props.history.push(`/listings/${listing.id}`)}
                                        key={listing.id}
                                    >
                                        <span className="price">
                                            <FaShippingFast className="ship"/>{" "}${listing.price}
                                        </span>
                                        <img src={listing.photoUrl} alt="home" />
                                    </div> 
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className="smash-section">
                        <ul>
                            <div className="box-one">
                                <span className="editors">Editor's Picks</span>
                                <span className="title">Super Smash Bros!</span>
                                <Link className="cat-link" to='/listings/category/smash'>
                                    Shop these unique finds 
                                    <BsArrowRight size={20} className='arrow'/>
                                </Link>
                            </div>
                            {listings.map((listing, i) => {
                                if (listing.category === 'smash') {
                                    return (
                                        <div className={`pic${i - 33}`} 
                                            onClick={() => this.props.history.push(`/listings/${listing.id}`)}
                                            key={listing.id}
                                        >
                                            <span className="price">
                                                <FaShippingFast className="ship"/>{" "}${listing.price}
                                            </span>
                                            <img src={listing.photoUrl} />
                                        </div>
                                    )
                                    }
                            })}
                            <p className="smash-p">
                                Super Smash Bros, a N64 game released in 1999, has 
                                captured fans around the world. We have gifts for any Smash fan.
                            </p>
                        </ul>
                </div>
                <div className="fathers-section">
                        <ul>
                            <Link className="cat" to='/listings/category/fathers'>
                                Dicover Unique Father's Day Gifts
                                <BsArrowRight size={20} className='arrow'/>
                            </Link>
                            {listings.map((listing, i) => {
                                if (listing.category === 'fathers') {
                                    return (
                                        <div className={`pic${i - 46}`} 
                                            onClick={() => this.props.history.push(`/listings/${listing.id}`)}
                                            key={listing.id}
                                        >
                                            <span className="price">
                                                <FaShippingFast className="ship"/>{" "}${listing.price}
                                            </span>
                                            <img src={listing.photoUrl} />
                                        </div>
                                    )
                                }
                            })}
                        </ul>
                </div>
                <div className="what-is-ootsy">
                    <span className="grid1">What is Ootsy?</span>
                    <p className="grid2">
                        A community doing good
                        <br />
                        <span>
                            Ootsy is a global online marketplace, where people come together 
                            to make, sell, buy, and collect unique items. We’re also a 
                            community pushing for positive change for small businesses, 
                            people, and the planet. 
                        </span>
                    </p>
                    <p className="grid3">
                        Support independent creators
                        <span>
                            There’s no Ootsy warehouse – just millions of people selling the 
                            things they love. We make the whole process easy, helping you connect 
                            directly with makers to find something extraordinary.
                        </span>
                    </p>
                    <p className="grid4">
                        Peace of mind
                        <br />
                        <span>
                            Your privacy is the highest priority of our dedicated team. And if you 
                            ever need assistance, we are always ready to step in for support.
                        </span>
                    </p>
                </div>
            </div>
        )
    };
};

export default ListingIndex;