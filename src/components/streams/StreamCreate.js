import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends React.Component {

    renderError({error, touched}) {
        if (touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }



    renderInput= ({input, label, meta})=>{
      const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className}>
            <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );


        //     onChange={formProps.input.onChange}
        //     value={formProps.input.value}
        // />
    }
    onSubmit(formProps){
        // event.preventDefault()
        console.log(formProps);
    }



    render() {
        return (
           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
               <Field name="title" component={this.renderInput} label="Enter title"/>
               <Field name="description" component={this.renderInput} label="Enter Description"/>
           <button className="ui button">Submit</button>
           </form>
    );
    }
}
const validate = (formValues) =>{
    const errors ={};

    if (!formValues.title){
        errors.title = 'Enter a title!';

    }
    if (!formValues.description){
        errors.description = 'Enter a description!';
    }

    return errors;
};


export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);