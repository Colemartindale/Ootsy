import React from "react";
import { Link } from "react-router-dom";

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
        if (!this.props.listings) {
            return null
        };

        return (
            <div className="cat-container">
                {this.props.listings.map(listing => {
                        return (
                            <Link className="listing-content" to={`/listings/${listing.id}`} >
                                <img src={listing.photoUrl} className='img'/>
                                <div className="details">
                                    <div className="p-name">{listing.product_name}</div>
                                    <div className="price-shop">
                                        <span className="price">${listing.price}</span>
                                        <span className="s-name">{listing.shop_name}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    };
};

export default CategoryIndex;