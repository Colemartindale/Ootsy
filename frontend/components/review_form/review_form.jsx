import React from "react";
import StarRating from "../listing_show/star_rating";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', 
                    rating: 0, 
                    user_id: this.props.currentUser ? this.props.currentUser.id : null,
                    listing_id: this.props.listing.id};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.render = this.render.bind(this);     
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.action(this.state)
                .then(() => {
                    return (
                        this.setState({body: '', rating: null}, this.props.resetErrors)
                    )
                })      
        } else {
            this.props.openModal('login')
        }
    };

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.currentUser !== prevProps.currentUser) {
            this.setState({user_id: this.props.currentUser})
        }
    };

    handleRating(rating) {
        this.setState({...this.state, rating})
    };

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                -{error}
              </li>
            ))}
          </ul>
        );
    };

    render() {
        if (!this.props.listing) {
            return null
        };

        let errorOcc;
        let errors;
        let starRating;
        if (this.props.errors.length > 0) {
            errorOcc = 'error-input'
            errors = 'errors-form'
            starRating = 'error-rating'
        } else {
            errorOcc = 'body-input'
            errors = ""
            starRating = 'rating'
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="top-line">
                    <span>Leave a Review</span>
                    <StarRating 
                        size={34} 
                        updateStars={this.handleRating}                      
                        className={starRating}
                        currentRating={this.state.rating}
                        
                    />
                </div>
                <label className="text-label">
                    <textarea 
                        value={this.state.body} 
                        onChange={this.update('body')}
                        className={errorOcc}
                    />
                </label>
                <span className={errors}>{this.renderErrors()}</span>
                <button>Submit Review</button>
            </form>
        )
    };
};

export default ReviewForm;