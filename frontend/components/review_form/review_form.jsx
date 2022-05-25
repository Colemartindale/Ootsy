import React from "react";
import StarRating from "../listing_show/star_rating";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', rating: 1, user_id: this.props.currentUser.id, listing_id: this.props.listing.id};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.render = this.render.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => {
                return (
                    this.setState({body: '', rating: 1})
                )
            })
            
    };

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    };

    handleRating(rating) {
        this.setState({...this.state, rating})
    };

    render() {
        if (!this.props.currentUser) {
            return null
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="top-line">
                    <span>Leave a Review</span>
                    <StarRating 
                        size={34} 
                        updateStars={this.handleRating} 
                        value={this.state.rating} 
                        className='rating' 
                    />
                </div>
                <label className="text-label">
                    <textarea 
                        value={this.state.body} 
                        onChange={this.update('body')}
                        className='body-input'
                    />
                </label>
                <button>Submit Review</button>
            </form>
        )
    };
};

export default ReviewForm;