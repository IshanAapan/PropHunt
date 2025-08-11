export default function PropWorth() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-[1152px]">
      <p className="text-gray-600 mb-4 text-center">
        Enter your property details to know the current market value.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter Project/Locality"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800">
          Get Estimate
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-500 text-center">
        Most accurate Estimates
      </p>
    </div>
  );
}
