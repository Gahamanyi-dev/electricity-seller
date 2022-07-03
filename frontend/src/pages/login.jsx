import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const signUpValidationSchema = yup.object().shape({
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

const Login = () => {
    const navigate = useNavigate();
  const handleSubmitLogin = async (data) => {
    
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        data
      );
      console.log(response.data.message)
      if (response.data.success === true) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const user = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => handleSubmitLogin(values)}
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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <div className="mb-3">
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

export default Login;
