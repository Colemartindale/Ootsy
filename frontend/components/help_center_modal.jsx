import React from "react";

class HelpCenter extends React.Component {
    constructor(props) {
        super(props)  
    };

    render() {
        return (
            <div className="help-center-modal">
                <p>Thanks for checking out Ootsy!</p>
                <p>
                    Please email me
                    if you have any inquires.
                    <h2>cole.martindale13@gmail.com</h2> 
                </p>
                <p>Thanks!</p>
            </div>
        )
    }
};

export default HelpCenter;