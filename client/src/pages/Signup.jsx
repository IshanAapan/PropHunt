import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // ---------------------- VALIDATION ----------------------
  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = <p className="text-red-500">Required</p>;
    } else if (values.fullname.length > 15) {
      errors.fullname = (
        <p className="text-red-500">Must be 15 characters or less</p>
      );
    }

    if (!values.email) {
      errors.email = <p className="text-red-500">Required</p>;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = <p className="text-red-500">Invalid Email Address</p>;
    }

    if (!values.mob) {
      errors.mob = <p className="text-red-500">Required</p>;
    } else if (values.mob.length !== 10) {
      errors.mob = <p className="text-red-500">Must be 10 digits</p>;
    }

    if (!values.password) {
      errors.password = <p className="text-red-500">Required</p>;
    } else if (values.password.length < 8) {
      errors.password = (
        <p className="text-red-500">Must be more than 8 characters</p>
      );
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = <p className="text-red-500">Required</p>;
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = (
        <p className="text-red-500">Passwords must match</p>
      );
    }

    if (!values.role) {
      errors.role = <p className="text-red-500">Role is required</p>;
    }

    return errors;
  };

  // ---------------------- FORMIK ----------------------
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      mob: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log("Submitting: ", values);
      console.log("API URL:", import.meta.env.VITE_API_URL);
      try {
        const resp = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/user/register`,
          values
        );
        console.log("User registered:", resp.data);
        // alert("User registered successfully!");
        toast.success("User registered successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Error registering user:", error);
        toast.error("Error registering user");
      }
    },
  });

  // ---------------------- UI ----------------------
  return (
    <div className="flex h-screen w-screen">
      {/* Left Side Banner */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        <div className="select-none bg-opacity-50 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
          "Unlock Your Dream Property with Us"
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className="block mb-1 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
              {formik.errors.fullname}
            </div>

            {/* Email */}
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
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email}
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="mob" className="block mb-1 text-sm text-gray-600">
                Contact No.
              </label>
              <input
                id="mob"
                name="mob"
                type="tel"
                placeholder="1234567890"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={formik.handleChange}
                value={formik.values.mob}
              />
              {formik.errors.mob}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block mb-1 text-sm text-gray-600"
              >
                Role
              </label>

              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                onChange={formik.handleChange}
                value={formik.values.role}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="tenant">Tenant</option>
                <option value="owner">Owner</option>
                <option value="admin">Admin</option>
              </select>

              {formik.errors.role}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms and conditions
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="login" className="text-blue-500 underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
