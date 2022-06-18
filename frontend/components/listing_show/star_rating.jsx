import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating: null, hover: null};
        this.changeRating = this.changeRating.bind(this);
    };

    changeRating(ratingValue) {
        this.setState({rating: ratingValue});
        this.props.updateStars(ratingValue);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.currentRating !== this.props.currentRating) {
            this.setState({rating: this.props.currentRating});
        };
    };
    
    render() {
        // console.log(this.state)
        return (
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
    
                    return (
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                onClick={() => (this.changeRating(ratingValue))}
                                />
                            <FaStar 
                                className="star"
                                color={ratingValue <= (this.state.hover || this.state.rating) ? "#000000" : "#dedede" }
                                onMouseEnter={() => this.setState({hover: ratingValue})}
                                onMouseLeave={() => this.setState({hover: null})}                              
                                size={28}
                            />
                        </label>
                    )
                })}
            </div>
        );
    }
}

export default StarRating;