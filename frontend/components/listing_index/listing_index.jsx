import React from "react";

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    };
    
    componentDidMount() {
        this.props.fetchListings()
    };
    
    render() {
        // console.log(this.props)
        if (this.props.listings.length === 0) {
            return null
        };
        console.log(this.props.listings[0].photoUrl)
        return (
            <div>
                <ul className="index-ul">
                    {this.props.listings.map(listing => <li key={listing.id}><img src={listing.photoUrl} /></li>)}
                </ul>
            </div>
        )
    };
};

export default ListingIndex;