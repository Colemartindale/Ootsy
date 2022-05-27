import { connect } from "react-redux";
import { openModal } from "../actions/modal_actions";
import Footer from "./footer";

// const mSTP = state => ({
    
// });

const mDTP = dispatch => ({
    openModal: type => dispatch(openModal(type))
});

export default connect(null, mDTP)(Footer)