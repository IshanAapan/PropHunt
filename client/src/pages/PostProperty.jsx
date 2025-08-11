// File: PostProperty.jsx
import React, { useState } from "react";
import Step1 from "../PostPropertySteps/Step1_PropertyType";
import Step2 from "../PostPropertySteps/Step2_Location";
import Step3 from "../PostPropertySteps/Step3_Details";
import Step4 from "../PostPropertySteps/Step4_ImagesAndPrice";
import Step5 from "../PostPropertySteps/Step5_OwnerInfo";
import Footer from "./Footer"; // Optional

const PostProperty = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: "",
    propertyType: "",
    bhkType: "",
    city: "",
    locality: "",
    address: "",
    area: "",
    floor: "",
    furnishing: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
    price: "",
    availability: "",
    name: "",
    email: "",
    phone: "",
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const updateForm = (data) => setFormData({ ...formData, ...data });

  const steps = [
    <Step1 next={next} data={formData} updateForm={updateForm} />,
    <Step2 next={next} prev={prev} data={formData} updateForm={updateForm} />,
    <Step3 next={next} prev={prev} data={formData} updateForm={updateForm} />,
    <Step4 next={next} prev={prev} data={formData} updateForm={updateForm} />,
    <Step5 prev={prev} data={formData} updateForm={updateForm} />,
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {/* Left Side: Visual + FAQ */}
        <div className="flex flex-col justify-between bg-blue-50 rounded-xl shadow">
          <div className="flex flex-col items-center text-center p-4 ">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="exploring"
              className="rounded-lg mb-4 h-72 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Easily List Your Property
            </h2>
            <p className="text-gray-600">
              Let buyers and tenants find you instantly by sharing key details
              about your property.
            </p>
          </div>

          {/* FAQs as Accordion */}
          <div className="mt-8">
            <h3 className="text-lg font-bold ml-2 mb-4 text-blue-700">FAQs</h3>
            <div className="space-y-2">
              <details className=" p-4">
                <summary className="font-semibold cursor-pointer">
                  How long does a listing stay active?
                </summary>
                <p className="mt-2 text-sm text-gray-700">
                  Listings remain active for 30 days and can be renewed.
                </p>
              </details>
              <details className=" p-4">
                <summary className="font-semibold cursor-pointer">
                  Is it free to post a property?
                </summary>
                <p className="mt-2 text-sm text-gray-700">
                  Yes, posting a basic listing is absolutely free.
                </p>
              </details>
              <details className="p-4">
                <summary className="font-semibold cursor-pointer">
                  Can I edit property details later?
                </summary>
                <p className="mt-2 text-sm text-gray-700">
                  Yes, after submission you can edit from your dashboard.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-blue-700">
              Post Your Property
            </h1>
            <p className="text-gray-600">Step {step} of 5</p>
          </div>
          {steps[step - 1]}
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
