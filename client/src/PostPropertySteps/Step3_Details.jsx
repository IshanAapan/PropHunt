import React from "react";

const Step3_Details = ({ next, prev, data, updateForm }) => {
  const handleChange = (e) => updateForm({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium">Super Built-up Area (sq ft)</label>
        <input
          name="area"
          value={data.area}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Floor No.</label>
        <input
          name="floor"
          value={data.floor}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Furnishing</label>
        <select
          name="furnishing"
          value={data.furnishing}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Bedrooms</label>
          <input
            name="bedrooms"
            value={data.bedrooms}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Bathrooms</label>
          <input
            name="bathrooms"
            value={data.bathrooms}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={prev} className="text-gray-600 px-4 py-2">
          Back
        </button>
        <button
          onClick={next}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3_Details;
