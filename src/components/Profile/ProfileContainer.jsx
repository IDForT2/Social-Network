import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);