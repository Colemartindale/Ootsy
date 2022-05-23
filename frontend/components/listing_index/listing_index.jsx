import React from "react";
import IndexHeaderContainer from '../index_header/index_header_container'

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
                        <span className="cat-link">Shop these unique finds</span>
                        {listings.map((listing) => {
                            if (listing.category === 'home') {
                                return <img src={listing.photoUrl} 
                                    alt="home" 
                                    onClick={() => this.props.history.push(`/listings/${listing.id}`)}/>
                            }
                        })}
                    </ul>
                </div>
                <div className="smash-section">
                        <ul>
                            <span className="cat" >Super Smash Bros</span>
                            {listings.map(listing => {
                                if (listing.category === 'smash') {
                                    return <img src={listing.photoUrl} 
                                        onClick={() => this.props.history.push(`/listings/${listing.id}`)}/>
                                }
                            })}
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
                            <span>What is ootsy?</span>
                </div>
            </div>
        )
    };
};

export default ListingIndex;