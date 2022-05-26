import React from "react";
import IndexHeaderContainer from '../index_header/index_header_container'
import { BsArrowRightCircle } from 'react-icons/Bs';
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
                {/* <ul className="index-ul">
                    {listings.map(listing => 
                            <a href={`#/listings/${listing.id}`}>
                                <li key={listing.id}><img src={listing.photoUrl} /></li>
                            </a>
                        )
                    }
                </ul> */}
                <div className="home-section">
                    <ul>
                        <span className="cat">Home & Living</span>
                        <Link className="cat-link" to='/listings/category/home'>
                            Shop these unique finds 
                            <BsArrowRightCircle size={16} className='arrow'/>
                        </Link>
                        {listings.map((listing, i) => {
                            if (listing.category === 'home') {
                                return (
                                    <div className={`pic${i - 13}`} 
                                        onClick={() => this.props.history.push(`/listings/${listing.id}`)}
                                    >
                                        <span className="price"><FaShippingFast className="ship"/>{" "}${listing.price}</span>
                                        <img src={listing.photoUrl} alt="home" />
                                    </div> 
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className="smash-section">
                        <ul>
                            <p className="cat" >
                                Super Smash Bros
                            </p>
                            {listings.map((listing, i) => {
                                if (listing.category === 'smash') {
                                    return (
                                        <div className={`pic${i - 33}`} 
                                            onClick={() => this.props.history.push(`/listings/${listing.id}`)}
                                        >
                                            <img src={listing.photoUrl} />
                                        </div>
                                    )
                                    }
                            })}
                            <p>
                                these neat things
                            </p>
                        </ul>
                </div>
                <div className="fathers-section">
                        <ul>
                            <span className="cat">Unique Father's Day Finds</span>
                            {listings.map(listing => {
                                if (listing.category === 'fathers') {
                                    return <img src={listing.photoUrl} 
                                        onClick={() => this.props.history.push(`/listings/${listing.id}`)}/>
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
                            There’s no Etsy warehouse – just millions of people selling the 
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
                <div className="questions">
                    <span className="grid1">Have a question? Well, we’ve got some answers.</span>
                    <button className="grid2">Go to Help Center</button>
                </div>
            </div>
        )
    };
};

export default ListingIndex;