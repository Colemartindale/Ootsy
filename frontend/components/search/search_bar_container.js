import { connect, Connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./search_bar";

const mSTP = state => (null);

const mDTP = dispatch => (null);

export default withRouter(connect()(SearchBar))