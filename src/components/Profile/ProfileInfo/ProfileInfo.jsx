import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }




    return (
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Alabama_Hills1-1200px.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h3>
                    {props.profile.fullName}
                </h3>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
            </div>
            <div>
                <h2>
                    Jobs
                </h2>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo