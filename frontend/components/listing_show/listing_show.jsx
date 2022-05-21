import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListing()
    }

    render() {
        console.log(this.props.listing, 'hi')
        if (!this.props.listing) {
            return null
        };
        return(
            <div className="show-container">

                <img src={this.props.listing.photoUrl} alt="img" className="show-img" />
            </div>
        )
    }
};

export default ListingShow;