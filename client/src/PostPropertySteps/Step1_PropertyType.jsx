import React from "react";

const Step1_PropertyType = ({ next, data, updateForm }) => {
  const handleChange = (e) => updateForm({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium">Intent</label>
        <select
          name="intent"
          value={data.intent}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select</option>
          <option value="Sell">Sell</option>
          <option value="Rent">Rent</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">Property Type</label>
        <select
          name="propertyType"
          value={data.propertyType}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>
      </div>
      <div>
        <label className="block font-medium">BHK Type</label>
        <select
          name="bhkType"
          value={data.bhkType}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
        </select>
      </div>
      <button
        onClick={next}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1_PropertyType;
