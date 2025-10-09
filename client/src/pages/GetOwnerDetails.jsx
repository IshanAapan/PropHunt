import React from "react";
import { useNavigate } from "react-router-dom";

const GetOwnerDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-2xl font-bold text-red-600">PropHunt</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Owner Details
        </h2>

        {/* Owner Info Section */}
        <div className="space-y-5">
          {/* Name */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3">
            <p className="text-gray-500">Owner Name</p>
            <p className="font-semibold text-gray-800">Rajesh Sharma</p>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3">
            <p className="text-gray-500">Contact Number</p>
            <p className="font-semibold text-gray-800">+91 98765 43210</p>
          </div>

          {/* Email (Optional) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3">
            <p className="text-gray-500">Email ID</p>
            <p className="font-semibold text-gray-800">
              rajesh.sharma@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-500">Property Address</p>
            <p className="font-semibold text-gray-800 text-right sm:w-2/3">
              C4RR+HXX, Ch Nandlal Tanwar Marg, Vishali Garments, Delhi - 110092
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
            Call Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOwnerDetails;
