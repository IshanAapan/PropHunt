import axios from "axios";
import { useState } from "react";
import Header from "../pages/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostProperty = () => {
  // const [propertyType, setPropertyType] = useState("Flat");
  // const [bhkType, setBhkType] = useState("1RK");
  // const [bathroomCount, setBathroomCount] = useState("1");
  // const [lookingTo, setLookingTo] = useState("Sell");

  const [propertyType, setPropertyType] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [bathroomCount, setBathroomCount] = useState("");
  const [lookingTo, setLookingTo] = useState("");

  const [projectName, setProjectName] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [emi, setEmi] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [direction, setDirection] = useState("");
  const [parking, setParking] = useState("");
  const [furnishedStatus, setFurnishedStatus] = useState("");

  const bhkOptions = ["1RK", "1BHK", "2BHK", "3BHK", "3BHK+"];
  const bathroomOptions = ["1", "2", "3", "4", "4+"];
  const lookingOptions = ["Sell", "Rent", "Airbnb"];
  const propertyTypes = ["Flat", "PG"];
  const [tenantType, setTenantType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [singleRoomRent, setSingleRoomRent] = useState("");
  const [doubleRoomRent, setDoubleRoomRent] = useState("");
  const [amount, setAmount] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [foodAvailability, setFoodAvailability] = useState("");
  const [acRooms, setAcRooms] = useState("");
  const [rent, setRent] = useState("");

  const token = localStorage.getItem("token");

  const data = {
    projectName,
    city,
    locality,
    propertyType,
    tenantType,
    roomType,
    singleRoomRent: singleRoomRent ? Number(singleRoomRent) : undefined,
    doubleRoomRent: doubleRoomRent ? Number(doubleRoomRent) : undefined,
    depositAmount: amount ? Number(amount) : undefined,
    noticePeriod: noticePeriod ? Number(noticePeriod) : undefined,
    foodAvailability,
    acRoom: acRooms,
    bhkType,
    bathrooms: bathroomCount ? Number(bathroomCount) : undefined,
    lookingto: lookingTo.toLowerCase(),
    estimatedEMI: emi ? Number(emi) : undefined,
    builtupArea: area ? Number(area) : undefined,
    direction,
    parking,
    price: price ? Number(price) : undefined,
    furnishedStatus,
    rent: rent ? Number(rent) : undefined,
  };

  const resetForm = () => {
    setProjectName("");
    setCity("");
    setLocality("");
    setPropertyType("Flat");
    setTenantType("");
    setRoomType("");
    setSingleRoomRent("");
    setDoubleRoomRent("");
    setAmount("");
    setNoticePeriod("");
    setFoodAvailability("");
    setAcRooms("");
    setBhkType("1RK");
    setBathroomCount("1");
    setLookingTo("sale");
    setEmi("");
    setArea("");
    setDirection("");
    setParking("");
    setFurnishedStatus("");
    setPrice("");
    setRent("");
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80";

  const handleSubmit = async () => {
    try {
      console.log("aa gya h");
      const resp = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/property/postproperty`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Property posted successfully:", resp.data);
      toast.success("Property posted successfully:", resp.data);
      resetForm();
    } catch (error) {
      console.log("Error posting property:", error);
      toast.error("Failed to post property.");
    }
  };

  return (
    <>
      {token ? <Header /> : null}
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="Property"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium text-gray-700">
                How do I post my property?
              </summary>
              <p className="mt-2 text-gray-600">
                Simply fill in the form and select your property details, then
                click submit.
              </p>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium text-gray-700">
                Is posting free?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you can post your first property ad for free.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer font-medium text-gray-700">
                Can I post commercial properties?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we support Residential, Commercial, and Land/Plot listings.
              </p>
            </details>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-6">
            Hey dev! Tell us about your Property
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Enter Locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            />
          </div>

          {/* Property Type */}
          <div className="mb-4">
            <h2 className="mb-1">Property Type</h2>
            <div className="flex">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`flex-1 py-2 border cursor-pointer ${
                    propertyType === type
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* BHK Type */}
          {propertyType === "Flat" && (
            <>
              <div>
                <div className="mb-4">
                  <h2 className="mb-1">BHK Type</h2>
                  <div className="grid grid-cols-5 gap-2">
                    {bhkOptions.map((bhk) => (
                      <button
                        key={bhk}
                        onClick={() => setBhkType(bhk)}
                        className={`py-2 border cursor-pointer ${
                          bhkType === bhk
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {bhk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="mb-4">
                  <h2 className="mb-1">Bathrooms</h2>
                  <div className="grid grid-cols-5 gap-2">
                    {bathroomOptions.map((count) => (
                      <button
                        key={count}
                        onClick={() => setBathroomCount(count)}
                        className={`py-2 border cursor-pointer ${
                          bathroomCount === count
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Looking To */}
                <div className="mb-4">
                  <h2 className="mb-1">You're looking to</h2>
                  <div className="flex">
                    {lookingOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setLookingTo(opt)}
                        className={`flex-1 py-2 border cursor-pointer ${
                          lookingTo === opt
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* More Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {lookingTo === "Sell" && (
                    <>
                      <input
                        type="text"
                        placeholder="Estimated EMI"
                        value={emi}
                        onChange={(e) => setEmi(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      />
                    </>
                  )}
                  {(lookingTo === "Rent" || lookingTo === "Airbnb") && (
                    <>
                      <input
                        type="text"
                        placeholder="Deposit Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      />
                    </>
                  )}
                  {(lookingTo === "Sell" || lookingTo === "Rent") && (
                    <>
                      <input
                        type="text"
                        placeholder="Built Up Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      />
                      <select
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      >
                        <option value="">Direction</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                        <option value="North East">North East</option>
                        <option value="South East">South East</option>
                        <option value="North West">North West</option>
                        <option value="South West">South West</option>
                      </select>
                    </>
                  )}
                  <select
                    value={parking}
                    onChange={(e) => setParking(e.target.value)}
                    className="border border-gray-300 rounded-md p-3"
                  >
                    <option value="">Parking</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                  {(lookingTo === "Sell" || lookingTo === "Airbnb") && (
                    <>
                      <input
                        type="text"
                        placeholder="Price (in ₹)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      />
                    </>
                  )}
                  {lookingTo === "Rent" && (
                    <>
                      <input
                        type="text"
                        placeholder="Rent (in ₹)"
                        value={rent}
                        onChange={(e) => setRent(e.target.value)}
                        className="border border-gray-300 rounded-md p-3"
                      />
                    </>
                  )}
                  <select
                    value={furnishedStatus}
                    onChange={(e) => setFurnishedStatus(e.target.value)}
                    className="border border-gray-300 rounded-md p-3"
                  >
                    <option value="">Furnished Status</option>
                    <option value="Fully Furnished">Fully Furnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {propertyType === "PG" && (
              <>
                <select
                  value={tenantType}
                  onChange={(e) => setTenantType(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                >
                  <option value="">Tenant Type</option>
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                  <option value="Co-Living">Co-Living</option>
                </select>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                >
                  <option value="">Room Type</option>
                  <option value="single">Single Sharing</option>
                  <option value="double">Double Sharing</option>
                  <option value="triple">Triple Sharing</option>
                </select>
                <input
                  type="text"
                  placeholder="Single Room Rent (in ₹)"
                  value={singleRoomRent}
                  onChange={(e) => setSingleRoomRent(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Double Room Rent (in ₹)"
                  value={doubleRoomRent}
                  onChange={(e) => setDoubleRoomRent(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Deposit Amount (in ₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Notice Period (in days)"
                  value={noticePeriod}
                  onChange={(e) => setNoticePeriod(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                />
                <select
                  value={foodAvailability}
                  onChange={(e) => setFoodAvailability(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                >
                  <option value="">Food Availability</option>
                  <option value="veg">Veg</option>
                  <option value="non-veg">Non-Veg</option>
                  <option value="both">Both(Veg/Non-Veg)</option>
                </select>
                <select
                  value={acRooms}
                  onChange={(e) => setAcRooms(e.target.value)}
                  className="border border-gray-300 rounded-md p-3"
                >
                  <option value="">AC Room</option>
                  <option value="available">Available</option>
                  <option value="not available">Not Available</option>
                  <option value="both">Both</option>
                </select>
              </>
            )}
          </div>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default PostProperty;
