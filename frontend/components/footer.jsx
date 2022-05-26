import React from "react";
import { GiGreenPower } from "react-icons/Gi";
import { FaGithubSquare } from "react-icons/Fa";
import { BsLinkedin, BsPersonSquare } from "react-icons/Bs";
import { GiUsaFlag } from "react-icons/Gi";

class Footer extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="footer">
                <div className="powered-by">
                    <GiGreenPower size={25}/>
                    <span>Ootsy is powered by 100% renewable electricity.</span>
                </div>
                <div className="bottom">
                    <div className="details">
                        <GiUsaFlag />
                        <span>United States | English (US) | $ (USD)</span> 
                    </div>
                    <div className="links">
                        <FaGithubSquare size={30} />
                        <BsLinkedin size={25} />
                        <BsPersonSquare size={25}/>
                    </div>
                </div>
            </div>
        )
    };
};

export default Footer;