import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch with PropHunt
          </h2>
          <p className="mt-4 text-lg">
            We’re here to help you buy, sell, or rent properties with ease.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Company Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="mt-2 text-gray-600">
              Reach out to us anytime. Our support team is here to assist you.
            </p>
          </div>
          <div className="space-y-5 text-gray-700">
            <p>
              <span className="font-semibold">📍 Office Address:</span>
              xxx, India
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">✉️ Email:</span>{" "}
              support@prophunt.com
            </p>
            <p>
              <span className="font-semibold">⏰ Working Hours:</span> Mon - Sat
              (9 AM - 7 PM)
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600">
                🌐
              </a>
              <a href="#" className="hover:text-blue-600">
                📘
              </a>
              <a href="#" className="hover:text-blue-600">
                🐦
              </a>
              <a href="#" className="hover:text-blue-600">
                📸
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
