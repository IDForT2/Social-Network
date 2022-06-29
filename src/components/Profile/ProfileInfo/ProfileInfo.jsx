import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Alabama_Hills1-1200px.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo