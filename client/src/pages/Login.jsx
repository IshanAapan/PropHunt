
const Login = () => {
    return (
        <div className="flex h-screen w-screen">
            <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="select-none bg-opacity-50 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                    "Unlock Your Dream Property with Us"
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login to Your Account</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">Email</label>
                            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">Password</label>
                            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-md transition">
                            Sign In
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-center text-gray-600">
                        Don’t have an account? <a href="signup" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login
