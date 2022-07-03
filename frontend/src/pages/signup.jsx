import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signUpValidationSchema = yup.object().shape({
    first_name: yup
    .string()
    .required("first name is required"),
    last_name: yup
    .string()
    .required("last name is required"),
    email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
    .required("Password is required"),
});

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmitSignup=async (data)=>{
        
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users", data);
            console.log(response.data.message);
            if(response.data.success === true) navigate('/login');

        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="container">
      <h1>Signup</h1>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
            first_name:"",
            last_name:"",
            email: "",
          password: "",
        }}
        onSubmit={(values) => handleSubmitSignup(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="row" onSubmit={handleSubmit}>
            <div className="mb-3 col-6">
              <label htmlFor="first_name" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
              />

              <div className="text-danger my-2">
                {errors.first_name && touched.first_name && errors.first_name}
              </div>
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="last_name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
              />

              <div className="text-danger my-2">
                {errors.last_name && touched.last_name && errors.last_name}
              </div>
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="exampleInputEmail1"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <div className="text-danger my-2">
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="exampleInputPassword1"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="text-danger">
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
