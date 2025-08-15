import { useState } from "react";
import PropWorth from "../components/PropWorth";

export default function HomePage() {
  const propertyImages = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  ];

  const [form, setForm] = useState({
    city: "",
    locality: "",
    propertyType: "Flat",
    bhk: "",
    budget: "",
    tenantType: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("Buy");

  const renderError = (field) =>
    submitted && !form[field] ? (
      <p className="text-red-500 text-xs mt-1 capitalize">{field} is required</p>
    ) : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(((prev) => ({ ...prev, [name]: value })));
  }



  const handleSearch = () => {
    console.log("Searching...");

  }


  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg mb-8">
            Buy, Sell, or Rent properties across India
          </p>
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            {["Buy", "Rent", "PG", "Airbnb"].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition cursor-pointer ${activeTab === label
                  ? "bg-white text-blue-700 border-white"
                  : "border-white text-white hover:bg-white hover:text-blue-700"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
          {/* Search Box */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg max-w-5xl mx-auto">
            {(activeTab === "Buy" || activeTab === "Rent" || activeTab === "PG" || activeTab==="Airbnb") && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* City */}
                  <div>
                    <select
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className={`w-full border ${submitted && !form.city ? "border-red-500" : "border-gray-300 cursor-pointer"
                        } rounded-md px-3 py-2`}
                    >
                      <option value="">Select City</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                    {renderError("city")}
                  </div>

                  {/* Locality */}
                  <div>
                    <input
                      type="text"
                      name="locality"
                      placeholder="Search locality or landmark"
                      value={form.locality}
                      onChange={handleChange}
                      className={`w-full border ${submitted && !form.locality ? "border-red-500" : "border-gray-300"
                        } rounded-md px-3 py-2`}
                    />
                    {renderError("locality")}
                  </div>

                  {/* Search Button */}
                  <div className="flex items-stretch">
                    <button
                      onClick={handleSearch}
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md w-full hover:bg-blue-700 cursor-pointer"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Flat / Land */}
                  {(activeTab === "Buy" || activeTab === "Rent" || activeTab==="Airbnb") && (<>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="propertyType"
                          value="Flat"
                          checked={form.propertyType === "Flat"}
                          onChange={handleChange}
                        />
                        Flat
                      </label>
                      {/* <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="propertyType"
                        value="Land"
                        checked={form.propertyType === "Land"}
                        onChange={handleChange}
                      />
                      Land
                    </label> */}
                    </div>

                    {/* BHK */}
                    <div>
                      <select
                        name="bhk"
                        value={form.bhk}
                        onChange={handleChange}
                        className={`w-full border ${submitted && !form.bhk ? "border-red-500" : "border-gray-300"
                          } rounded-md px-3 py-2`}
                      >
                        <option value="">BHK Type</option>
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                      </select>
                      {renderError("bhk")}
                    </div>
                  </>)}
                  {/* Tenant Type */}
                  {activeTab === "PG" && (<>
                    <div>
                      <select
                        name="tenantType"
                        value={form.tenantType}
                        onChange={handleChange}
                        className={`w-full border ${submitted && !form.tenantType ? "border-red-500" : "border-gray-300"
                          } rounded-md px-3 py-2`}
                      >
                        <option value="">Tenant Type</option>
                        <option value="boys">Boys</option>
                        <option value="girls">Girls</option>
                        <option value="coLiving">Co-Living</option>
                      </select>
                      {renderError("tenantType")}
                    </div>
                  </>)}
                  {/* Room Type */}
                  {activeTab === "PG" && (<>
                    <div>
                      <select
                        name="roomType"
                        value={form.roomType}
                        onChange={handleChange}
                        className={`w-full border ${submitted && !form.roomType ? "border-red-500" : "border-gray-300"
                          } rounded-md px-3 py-2`}
                      >
                        <option value="">Room Type</option>
                        <option value="single">Single Bed</option>
                        <option value="double">Double Bed</option>
                        <option value="triple">Triple Bed</option>
                      </select>
                      {renderError("tenantType")}
                    </div>
                  </>)}
                  {/* Budget */}
                  <div>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`w-full border ${submitted && !form.budget ? "border-red-500" : "border-gray-300"
                        } rounded-md px-3 py-2`}
                    >
                      {activeTab === "Buy" && (<>
                        <option value="">₹ Budget</option>
                        <option value="20 Lakhs">Up to 20 Lakhs</option>
                        <option value="50 Lakhs">Up to 50 Lakhs</option>
                        <option value="1 Crore">Up to 1 Crore</option>
                      </>)}
                      {(activeTab === "Rent" || activeTab ==="Airbnb") && (<>
                        <option value="">₹ Budget</option>
                        <option value="25k">Up to 25k</option>
                        <option value="40k">Up to 40k </option>
                        <option value="50k">Up to 50k</option>
                      </>)}
                      {activeTab === "PG" && (<>
                        <option value="">₹ Budget</option>
                        <option value="10k">Up to 10k</option>
                        <option value="20k">Up to 20k </option>
                        <option value="30k">Up to 30k</option>
                      </>)}
                    </select>
                    {renderError("budget")}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section >



      {/* Featured Properties */}
      < section className="py-12 px-4" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Properties
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {propertyImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={`Property ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    2BHK in Noida Sector {70 + idx}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ₹{40 + idx * 5} Lakhs • {950 + idx * 20} sq.ft
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-16 bg-blue-50 px-4" >
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
      </section >
      {/* PropWorth Section */}
      < section className="py-16 px-4" >
        <div className="max-w-[1152px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
            Check Your Property Worth
          </h2>
          <PropWorth />
        </div>
      </section >
    </div >
  );
}
