import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

let maxLength100 = maxLengthCreator(100)

const AddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength100]} name="newMessageBody" placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMassageReduxForm = reduxForm({
    form: 'dialogAddMassageForm'
})(AddMassageForm);

export default AddMassageReduxForm