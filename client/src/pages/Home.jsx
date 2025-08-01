export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg mb-8">
            Buy, Sell, or Rent properties across India
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by city, locality, or project"
              className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
            />
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {["Buy", "Rent", "Commercial", "Plots", "Projects"].map((label) => (
            <button
              key={label}
              className="px-5 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Properties
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    idx + 1
                  }00000000?auto=format&fit=crop&w=600&q=80`}
                  alt="Property"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    2BHK in Noida Sector {70 + idx}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ₹{40 + idx * 5} Lakhs • {950 + idx * 20} sq.ft
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Verified Listings", icon: "✅" },
              { title: "Lowest Brokerage", icon: "💸" },
              { title: "Legal Assistance", icon: "📜" },
              { title: "Easy Loans", icon: "🏦" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          © 2025 MyRealEstate — Made with ❤️ for property seekers
        </div>
      </footer>
    </div>
  );
}
