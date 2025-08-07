import React from "react";

const Step2_Location = ({ next, prev, data, updateForm }) => {
  const handleChange = (e) => updateForm({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium">City</label>
        <input
          name="city"
          value={data.city}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Locality</label>
        <input
          name="locality"
          value={data.locality}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Full Address</label>
        <textarea
          name="address"
          value={data.address}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
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

export default Step2_Location;
