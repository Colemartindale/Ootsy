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
        // console.log(this.props)
        if (this.props.listings.length === 0 || this.props.listings.length < 3) {
            return null
        };
        console.log(this.props.listings[0].photoUrl)
        return (
            <div>
                <IndexHeaderContainer />
                <ul className="index-ul">
                    {this.props.listings.map(listing => 
                            <a href={`#/listings/${listing.id}`}>
                                <li key={listing.id}><img src={listing.photoUrl} /></li>
                            </a>
                        )
                    }
                </ul>
            </div>
        )
    };
};

export default ListingIndex;