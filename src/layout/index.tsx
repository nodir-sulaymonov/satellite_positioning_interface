import React from 'react';
import {Formik} from "formik";

import './RightBody.scss';

const BasicExample = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ name: 'jared',
                             category: '23'   }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                    />
                    {props.errors.name && <div className="inputField">{props.errors.name}</div>}
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.category}
                        name="name"
                    />
                    {props.errors.category && <div className="inputField">{props.errors.category}</div>}
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    </div>
);
export default BasicExample;
