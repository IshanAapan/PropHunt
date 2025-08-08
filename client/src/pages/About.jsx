import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About PropHunt</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted partner in finding, buying, and selling properties with
            complete transparency and ease.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At PropHunt, our mission is to simplify property transactions by
            providing accurate insights, transparent processes, and advanced
            technology that connects buyers, sellers, and agents seamlessly.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a real estate marketplace where trust, efficiency, and
            customer satisfaction drive every deal — making property
            transactions as simple as booking a cab.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Why Choose PropHunt?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Accurate Estimates</h3>
              <p className="text-gray-600">
                Get the most precise property value estimates with our advanced
                AI-powered tools.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Trusted Listings</h3>
              <p className="text-gray-600">
                We verify every listing to ensure you get the most reliable
                property information.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our dedicated team is here to guide you at every step of your
                property journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="mb-6">
            Join thousands of happy customers who found their perfect homes with
            PropHunt.
          </p>
          <a
            href="/postproperty"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Post Your Property
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
