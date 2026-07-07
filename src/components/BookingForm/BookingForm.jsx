import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const [submitted, setSubmitted] = useState(false);

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[A-Za-z\s]+$/, "First name must contain letters only"),

    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z\s]+$/, "Last name must contain letters only"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),

    date: Yup.string().required("Date is required"),

    time: Yup.string().required("Time is required"),

    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "At least 1 guest")
      .max(10, "Maximum of 10 guests"),

    occasion: Yup.string().required("Occasion is required"),
  });

  return (
    <div className="booking-form">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          time: "",
          guests: 1,
          occasion: "Birthday",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 2000);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <>
            {submitted && (
              <div className="success-message animate-success">
                ✅ Reservation submitted successfully!
              </div>
            )}

            <Form className="form">
              {/* First Name */}
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className={`input ${
                  errors.firstName && touched.firstName ? "input-error" : ""
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="error"
              />

              {/* Last Name */}
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className={`input ${
                  errors.lastName && touched.lastName ? "input-error" : ""
                }`}
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="error"
              />

              {/* ✅ Email */}
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className={`input ${
                  errors.email && touched.email ? "input-error" : ""
                }`}
              />
              <ErrorMessage name="email" component="span" className="error" />

              {/* Date */}
              <label htmlFor="date">Choose date</label>
              <Field
                type="date"
                id="date"
                name="date"
                className={`input ${
                  errors.date && touched.date ? "input-error" : ""
                }`}
              />
              <ErrorMessage name="date" component="span" className="error" />

              {/* Time */}
              <label htmlFor="time">Choose time</label>
              <Field
                as="select"
                id="time"
                name="time"
                className={`input ${
                  errors.time && touched.time ? "input-error" : ""
                }`}
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="span" className="error" />

              {/* Guests */}
              <label htmlFor="guests">Number of guests</label>
              <Field
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                className={`input ${
                  errors.guests && touched.guests ? "input-error" : ""
                }`}
              />
              <ErrorMessage name="guests" component="span" className="error" />

              {/* Occasion */}
              <label htmlFor="occasion">Occasion</label>
              <Field
                as="select"
                id="occasion"
                name="occasion"
                className={`input ${
                  errors.occasion && touched.occasion ? "input-error" : ""
                }`}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage
                name="occasion"
                component="span"
                className="error"
              />

              <button type="submit">Make Your Reservation</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
