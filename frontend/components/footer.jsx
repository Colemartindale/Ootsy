import React from "react";
import { GiGreenPower } from "react-icons/Gi";
import { FaGithubSquare } from "react-icons/Fa";
import { BsLinkedin, BsPersonSquare } from "react-icons/Bs";
import { GiUsaFlag } from "react-icons/Gi";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="footer">
                <div className="questions">
                    <span className="grid1">Have a question? Well, we’ve got some answers.</span>
                    <button className="grid2" onClick={() => this.props.openModal("help-center")}>
                        Go to Help Center
                    </button>
                </div>
                <div className="powered-by">
                    <GiGreenPower size={25}/>
                    <span>Ootsy is powered by 100% renewable electricity.</span>
                </div>
                <div className="bottom">
                    <div className="details">
                        <GiUsaFlag className="fleg"/>
                        <span>United States{" "} | {" "}English (US) {" "}|{" "} $ (USD)</span> 
                    </div>
                    <div className="links">
                        <a className="git" href="https://github.com/Colemartindale">
                            <FaGithubSquare className="github" size={29}/>
                        </a>
                        <a href="https://www.linkedin.com/in/cole-martindale-385045147/">
                            <BsLinkedin className="link" size={25} />
                        </a>
                        <a href="#">
                            <BsPersonSquare className="port" size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    };
};

export default Footer;