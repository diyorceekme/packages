import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./style.css"

const App = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <label htmlFor="firstName" style={{ marginRight: "5px" }}>First Name</label>
                <input
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                ) : null}
            </div>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <label htmlFor="lastName" style={{ marginRight: "5px" }}>Last Name</label>
                <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                ) : null}
            </div>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <label htmlFor="email" style={{ marginRight: "5px" }}>Email Address</label>
                <input id="email" type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <button style={{ marginTop: "10px" }} type="submit">Submit</button>
        </form>
    );
};

export default App