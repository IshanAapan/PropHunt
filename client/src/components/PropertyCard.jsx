import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm mb-4">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">{property.title}</h3>
        <span className="text-sm text-gray-500">Explore Nearby</span>
      </div>

      {/* Rent / Deposit / Area */}
      <div className="flex justify-between items-center border p-4 bg-white shadow-sm">
        {/* Rent */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">₹ {property.rent}</h3>
          <p className="text-gray-500 text-sm">Rent (Negotiable)</p>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Deposit */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">₹ {property.deposit}</h3>
          <p className="text-gray-500 text-sm">Deposit (Non-Negotiable)</p>
        </div>

        <div className="w-px h-10 bg-gray-300"></div>

        {/* Area */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold">{property.area} sqft</h3>
          <p className="text-gray-500 text-sm">Built-up</p>
        </div>
      </div>

      {/* Image + Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center items-center bg-gray-100 h-32">
          <span className="text-gray-400">Image</span>
        </div>

        <div className="col-span-2">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg divide-x
          sm:divide-x-2 divide-y sm:divide-y-0 text-sm"
          >
            {/* Property Type */}
            <div className="flex items-center gap-3 p-4">
              <span className="text-xl">🏢</span>
              <div>
                <p className="font-semibold">{property.type}</p>
                <p className="text-gray-500 text-xs">Property Type</p>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-center gap-3 p-4">
              <span className="text-xl">🅿️</span>
              <div>
                <p className="font-semibold">{property.parking}</p>
                <p className="text-gray-500 text-xs">Parking</p>
              </div>
            </div>

            {/* Furnishing */}
            <div className="flex items-center gap-3 p-4">
              <span className="text-xl">🛋️</span>
              <div>
                <p className="font-semibold">{property.furnishing}</p>
                <p className="text-gray-500 text-xs">Furnishing</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4">
              <span className="text-xl">📅</span>
              <div>
                <p className="font-semibold">{property.availability}</p>
                <p className="text-gray-500 text-xs">Available From</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t p-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Get Owner Details
        </button>
        <div className="flex gap-2">
          <button className="p-2 border rounded">♡</button>
          <button className="p-2 border rounded">⚑</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
