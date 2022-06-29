import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}

export default Profile