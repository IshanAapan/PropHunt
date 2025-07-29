import React from "react";
import { useFormik } from "formik";

const Signup = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (values.firstName.length > 15) {
      errors.firstName = (
        <div>
          <h4 style={{ color: "red" }}>!Must be 15 Character or less</h4>
        </div>
      );
    }

    if (!values.email) {
      errors.email = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = (
        <div>
          <h4 style={{ color: "red" }}>!Invalid Email Address</h4>
        </div>
      );
    }

    if (!values.contactNo) {
      errors.contactNo = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (values.contactNo.length > 10) {
      errors.contactNo = (
        <div>
          <h4 style={{ color: "red" }}>Must be 10 Digits</h4>
        </div>
      );
    }

    if (!values.passWord) {
      errors.passWord = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (values.passWord.length < 8) {
      errors.passWord = (
        <div>
          <h4 style={{ color: "red" }}>!Must be More Than 8 Digits</h4>
        </div>
      );
    }

    if (!values.againPass) {
      errors.againPass = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (
      values.againPass !== values.passWord ||
      values.againPass.length < 8
    ) {
      errors.againPass = (
        <div>
          <h4 style={{ color: "red" }}>
            !Must be more than 8 digits and same as passWord
          </h4>
        </div>
      );
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      contactNo: "",
      passWord: "",
      againPass: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex h-screen w-screen">
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="select-none bg-opacity-50 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
          "Unlock Your Dream Property with Us"
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-1 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div>
              <label
                htmlFor="contactNo"
                className="block mb-1 text-sm text-gray-600"
              >
                Contact No.
              </label>
              <input
                id="contactNo"
                name="contactNo"
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+911234567890"
                onChange={formik.handleChange}
                value={formik.values.contactNo}
              />
              {formik.errors.contactNo ? (
                <div>{formik.errors.contactNo}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="passWord"
                className="block mb-1 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                id="passWord"
                name="passWord"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                onChange={formik.handleChange}
                value={formik.values.passWord}
              />
              {formik.errors.passWord ? (
                <div>{formik.errors.passWord}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="againPass"
                className="block mb-1 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                id="againPass"
                name="againPass"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                onChange={formik.handleChange}
                value={formik.values.againPass}
              />
              {formik.errors.againPass ? (
                <div>{formik.errors.againPass}</div>
              ) : null}
            </div>

            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  terms and conditions
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
