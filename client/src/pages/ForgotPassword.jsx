const ForgotPassword = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Left image panel */}
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

      {/* Right content */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
          <h1 className="text-left text-3xl font-bold text-gray-800">
            Forget your Password
          </h1>

          <h2 className="mt-4 text-left text-base text-gray-600">
            Please enter the email address you'd like your password reset
            information sent to.
          </h2>

          <p className="mt-8 text-sm font-medium text-gray-700">
            Enter email address
          </p>

          <input
            type="email"
            className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@example.com"
          />

          <button
            type="submit"
            className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition"
          >
            Request reset link
          </button>

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

export default ForgotPassword;
