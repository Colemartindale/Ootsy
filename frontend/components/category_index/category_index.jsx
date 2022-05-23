import React from "react";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchListingsByCategory(this.props.match.params.category)
    };

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.props.fetchListingsByCategory(this.props.match.params.category)
        };
    };

    render() {
        // console.log(this.props, 'hey')
        if (!this.props.listings) {
            return null
        };

        return (
            <div className="cat-container">
                {this.props.listings.map(listing => <img src={listing.photoUrl} className='img'/>)}
            </div>
        );
    };
};

export default CategoryIndex;