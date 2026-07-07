import React, { useEffect } from "react";
import "../Auth/Auth.css";
import "./SignUp.css";
import { FaFacebook, FaInstagramSquare, FaGoogle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  return (
    <div className="login-page">
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Sign Up Data:", values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-header">
              <h2>SIGN-UP</h2>
              <p>Please enter your Details To SignUp!</p>
            </div>

            {/* Username */}
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={
                errors.username && touched.username ? "input-error" : ""
              }
            />
            <ErrorMessage name="username" component="span" className="error" />

            {/* Password */}
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
            <ErrorMessage name="password" component="span" className="error" />

            {/* Confirm Password */}
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
            />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className="error"
            />

            <input type="submit" value="Sign Up" />

            <div className="socmed-icons">
              <FaFacebook className="icon" />
              <FaInstagramSquare className="icon" />
              <FaGoogle className="icon" />
            </div>

            <p>
              Do you have an account? <Link to="/auth">Sign in</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
