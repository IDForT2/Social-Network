import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Alabama_Hills1-1200px.jpg'/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
    )
}

export default ProfileInfo