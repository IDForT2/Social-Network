import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const SuperNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default SuperNavbarContainer