import {createField, Input, TextArea} from "../common/FormsControl/FormsControls";
import classes from "./Profile.module.css";
import {reduxForm} from "redux-form";
import React from "react";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
            <div>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>
        <div>
            <b>About me:</b>
            {createField("About me", "aboutMe", [], TextArea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
                <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm