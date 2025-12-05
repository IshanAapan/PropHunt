import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

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

    if (!values.password) {
      errors.password = (
        <div>
          <h4 style={{ color: "red" }}>!Required</h4>
        </div>
      );
    } else if (values.password.length < 8) {
      errors.password = (
        <div>
          <h4 style={{ color: "red" }}>!Must be More Than 8 Digits</h4>
        </div>
      );
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const resp = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/user/login`,
          values
        );
        console.log("Login response:", resp.data);
        console.log("Token:", resp.data.token);
        const token = resp.data.token;
        localStorage.setItem("token", token);
        toast.success("Login successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Incorrect email/password. Please try again");
      }
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
            Login to Your Account
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
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
              {formik.errors.email && <div>{formik.errors.email}</div>}
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
                name="password"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && <div>{formik.errors.password}</div>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="forgotpassword"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-md transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
