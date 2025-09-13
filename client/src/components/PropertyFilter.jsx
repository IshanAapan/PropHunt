import React from "react";

const PropertyFilter = ({ rent, setRent, area, setArea }) => {
  return (
    <aside className="w-full lg:w-1/4 bg-white border-r p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">Filters</h2>

      {/* Property Type */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Property Type</h3>
        {[
          "Office Space",
          "Shop",
          "Godown/Warehouse",
          "Industrial Shed",
          "Industrial Building",
          "Restaurant/Cafe",
          "Co-Working",
          "Showroom",
          "Other business",
        ].map((type, i) => (
          <div key={i} className="flex items-center mb-1">
            <input type="checkbox" id={type} className="mr-2" />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>

      {/* Rent Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">
          Rent Range: ₹ {rent.toLocaleString()} to ₹ 80,00,000
        </h3>
        <input
          type="range"
          min="0"
          max="8000000"
          step="50000"
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
          className="w-full accent-teal-600"
        />
      </div>

      {/* Built Up Area */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">
          Built Up Area (sq. ft.): {area.toLocaleString()} to 1,00,000 sq. ft.
        </h3>
        <input
          type="range"
          min="0"
          max="100000"
          step="500"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="w-full accent-teal-600"
        />
      </div>

      {/* Furnishing */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Furnishing</h3>
        {["Full", "Semi", "None"].map((f, i) => (
          <div key={i} className="flex items-center mb-1">
            <input type="checkbox" id={f} className="mr-2" />
            <label htmlFor={f}>{f}</label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Availability</h3>
        {["Immediate", "Within 15 Days", "Within 30 Days", "After 30 Days"].map(
          (a, i) => (
            <div key={i} className="flex items-center mb-1">
              <input type="radio" name="availability" id={a} className="mr-2" />
              <label htmlFor={a}>{a}</label>
            </div>
          )
        )}
      </div>

      {/* Parking */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Parking</h3>
        {["Public", "Reserved"].map((p, i) => (
          <div key={i} className="flex items-center mb-1">
            <input type="checkbox" id={p} className="mr-2" />
            <label htmlFor={p}>{p}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PropertyFilter;
