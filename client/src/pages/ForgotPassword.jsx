const ForgotPassword = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-full flex items-center justify-center bg-white">
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
            className="mt-8 w-full bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold py-2 rounded-md transition"
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
