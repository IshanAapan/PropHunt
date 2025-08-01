import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
  const SignupSchema = Yup.object().shape({
    Password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    newPassword: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <div className="flex h-screen w-screen">
      {/* Left image panel */}
      {/* <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="select-none bg-opacity-50 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
          "Unlock Your Dream Property with Us"
        </div>
      </div> */}

      {/* Right content */}
      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
          <h1 className="text-left text-3xl font-bold text-gray-800 mb-6">
            Reset Your Password
          </h1>
          <Formik
            initialValues={{
              Password: "",
              newPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log("Form Submitted with values:", values);
            }}
          >
            {({ errors, touched, values }) => (
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    New Password
                  </label>
                  <Field
                    name="Password"
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter New Password"
                  />
                  {errors.Password && touched.Password ? (
                    <div>{errors.Password}</div>
                  ) : null}
                  {/* <ErrorMessage
                    name="Password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  /> */}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <Field
                    name="newPassword"
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter New Password"
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <div>
                      <p>{errors.newPassword}</p>
                    </div>
                  ) : null}
                  {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  /> */}
                </div>
                {values.Password && values.newPassword ? (
                  values.Password === values.newPassword ? (
                    <p className="text-green-600 text-sm">✅ Passwords match</p>
                  ) : (
                    <p className="text-red-600 text-sm">
                      ❌ Passwords do not match
                    </p>
                  )
                ) : null}
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition"
                >
                  Save
                </button>
              </form>
            )}
          </Formik>
          {/* Back to Login link */}
          <div className="mt-8 text-center">
            <a href="/login" className="text-blue-500 hover:underline text-sm">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
