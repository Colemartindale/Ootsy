import React from "react";
import { Link } from "react-router-dom";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleCat = this.handleCat.bind(this)
    };

    componentDidMount() {
        this.props.fetchListingsByCategory(this.props.match.params.category)
    };

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.props.fetchListingsByCategory(this.props.match.params.category)
        };
    };

    handleCat(cat) {
        if (cat === 'smash') {
            return (
                <div className="banner">
                    <span> Super Smash Bros</span>
                    <p>
                        A party game and also a competitive game with world wide tournaments,
                        Smash Bros has a place in everyone's heart.
                    </p>
                </div>
            )
        } else if (cat === 'home') {
            return (
                <div className="banner">
                    <span> Home & Living</span>
                    <p>Kitchen and dining, storage solutions, rugs, lighting, wall decor, and 
                        furniture—everything you need to make your home yours
                    </p>
                </div>
            )
        } else if (cat === 'art') {
            return (
                <div className="banner">
                    <span> Art & Collectibles</span>
                    <p>
                        Custom artwork, portraits, and totally original paintings and prints to turn your 
                        home into a gallery
                    </p>
                </div>
            )
        } else if (cat === 'fathers'){
            return (
                <div className="banner">
                    <span> Father's Day Gifts</span>
                    <p>
                        Dad has many sides to his personality—and they’re all worth celebrating. 
                        From the fishing aficionado to the road trip soloist, we have gifts for 
                        every kind of dad and everything he loves.
                    </p>
                </div>
            )
        } else if (cat === 'accessories') {
            return (
                <div className="banner">
                    <span> Jewelry & Accessories</span>
                    <p>
                        Necklaces, bracelets, earrings, and rings to complete your 
                        look or wow them with a perfect gift
                    </p>
                </div>
            )
        } else if (cat === 'clothing') {
            return (
                <div className="banner">
                    <span> Clothing & Shoes</span>
                    <p>
                        All things wonderful and wearable for men, women, kids, and even little bitty babies
                    </p>
                </div>
            )
        } else if (cat === 'toys') {
            return (
                <div className="banner">
                    <span> Toys & Entertainment</span>
                    <p>
                        Toys, puzzles, games, and more fun-filled finds for kids of all ages
                    </p>
                </div>
            )
        } else if (cat === 'electronics') {
            return (
                <div className="banner">
                    <span> Electronics</span>
                    <p>
                        From custom keyboards to neat 3D printed accessories, these unique electronics
                        will light up your tech set up.
                    </p>
                </div>
            )
        }
    };

    render() {
        if (!this.props.listings) {
            return null
        };

        return (
            <div className="cat-container">
                {this.handleCat(this.props.match.params.category)}
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