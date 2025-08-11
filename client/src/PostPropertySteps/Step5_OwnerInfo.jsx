import React from "react";

const Step5_OwnerInfo = ({ prev, data, updateForm }) => {
  const handleChange = (e) => updateForm({ [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Final Data Submitted:", data);
    alert("Property posted successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium">Owner Name</label>
        <input name="name" value={data.name} onChange={handleChange} className="w-full p-3 border rounded" />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input name="email" value={data.email} onChange={handleChange} className="w-full p-3 border rounded" />
      </div>
      <div>
        <label className="block font-medium">Phone</label>
        <input name="phone" value={data.phone} onChange={handleChange} className="w-full p-3 border rounded" />
      </div>
      <div className="flex justify-between">
        <button onClick={prev} className="text-gray-600 px-4 py-2">Back</button>
        <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Step5_OwnerInfo;