import React from "react";

const Step4_ImagesAndPrice = ({ next, prev, data, updateForm }) => {
  const handleImageUpload = (e) => updateForm({ images: [...e.target.files] });
  const handleChange = (e) => updateForm({ [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Expected Price (₹)</label>
        <input
          name="price"
          value={data.price}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Availability</label>
        <input
          name="availability"
          value={data.availability}
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

export default Step4_ImagesAndPrice;
