import React, { useState } from "react";

const PostProperty = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  const categories = ["Residential", "Commercial", "Land/Plot"];
  const subOptions = {
    Residential: ["Rent", "Resale", "PG/Hostel", "Flatmates"],
    Commercial: ["Rent", "Sale"],
    "Land/Plot": ["Resale"],
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80";

  const faqs = [
    {
      question: "How do I post my property?",
      answer:
        "Simply fill in the form and select your property details, then click submit.",
    },
    {
      question: "Is posting free?",
      answer: "Yes, you can post your first property ad for free.",
    },
    {
      question: "Can I post commercial properties?",
      answer:
        "Yes, we support Residential, Commercial, and Land/Plot listings.",
    },
  ];

  const handleSubmit = () => {
    alert(
      `Name: ${name}
       Email: ${email}
       Mobile: ${mobile}
       City: ${city}
       WhatsApp Updates: ${whatsappUpdates ? "Yes" : "No"}
       Property Type: ${selectedCategory}
       Ad Type: ${selectedSubOption}`
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-gray-50 p-6 gap-8">
      {/* Left Image + FAQ */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-full">
          <img
            src={imageUrl}
            alt="Property"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-3">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-700">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Post Your Property
        </h1>

        {/* User Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-red-500 rounded-md p-3 outline-none"
            />
            <p className="text-red-500 text-sm">Enter your name</p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-red-500 rounded-md p-3 outline-none"
            />
            <p className="text-red-500 text-sm">Enter your Email</p>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2">
            <span className="flex items-center border border-red-500 rounded-md px-3 py-2 bg-gray-50">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="flex-1 border border-red-500 rounded-md p-3 outline-none"
            />
          </div>
          <p className="text-red-500 text-sm col-span-1 md:col-span-2 -mt-3">
            Enter valid mobile number
          </p>

          {/* City */}
          <div>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-red-500 rounded-md p-3 outline-none"
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
            <p className="text-red-500 text-sm">Please select a valid city</p>
          </div>
        </div>

        {/* WhatsApp Toggle */}
        <div className="flex items-center gap-2 mb-6">
          <span>Get updates on</span>
          <span className="text-green-500 text-lg">🟢 WhatsApp</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={whatsappUpdates}
              onChange={() => setWhatsappUpdates(!whatsappUpdates)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-green-500 relative transition-all">
              <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full"></div>
            </div>
          </label>
        </div>

        {/* Property Type */}
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          Property Type
        </h2>
        <div className="flex gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubOption("");
              }}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sub-options */}
        {selectedCategory && (
          <div>
            <h3 className="text-md font-medium mb-3 text-gray-600">
              Select Property Ad Type
            </h3>
            <div className="relative">
              <div className="flex gap-4 border-b pb-2">
                {subOptions[selectedCategory].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedSubOption(option)}
                    className={`relative px-4 py-2 text-gray-700 transition-colors duration-300 ${
                      selectedSubOption === option
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {option}
                    {selectedSubOption === option && (
                      <span className="absolute left-0 -top-1 w-full h-[3px] bg-blue-600 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Submit */}
        {selectedCategory && selectedSubOption && (
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              Start Posting Your Ad For Free
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostProperty;
