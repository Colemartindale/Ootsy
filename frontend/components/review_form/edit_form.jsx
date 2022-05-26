import React from "react";
import StarRating from "../listing_show/star_rating";

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.render = this.render.bind(this);
        this.rating = false;
    };

    componentDidMount() {
        this.props.fetchReview(this.props.reviewId)
    };

    handleSubmit(e) {
        e.preventDefault();    
        this.props.action(this.state)
            .then(() => (this.props.closeModal()))      
       
    };

    update(field) {
        return e => {
            return this.setState({[field]: e.currentTarget.value})
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
        if (!this.props.review || !this.props.reviewId) {
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
            <div className="edit-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="top-line">
                        <span>Edit Your Review</span>
                        <StarRating 
                            size={34} 
                            updateStars={this.handleRating}                      
                            className={starRating}
                            currentRating={this.rating}
                            
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
            </div>
        )
    };
};

export default EditForm;