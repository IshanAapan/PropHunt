import React, { useState } from "react";
import PropertyFilter from "../components/PropertyFilter";
import PropertyCard from "../components/PropertyCard";
import Header from "./Header";

const PropertyListing = () => {
  const [rent, setRent] = useState(0);
  const [area, setArea] = useState(0);

  const properties = [
    {
      title: "Godown/Warehouse In C4rr+Hxx, Ch Nandlal Tanwar Marg",
      rent: 35000,
      deposit: 35000,
      area: 2220,
      type: "Godown/Warehouse",
      parking: "Reserved",
      furnishing: "Semi Furnished",
      availability: "Immediately",
    },
    {
      title: "Office Space Near Sector 18 Metro Station",
      rent: 45000,
      deposit: 50000,
      area: 1800,
      type: "Office",
      parking: "Available",
      furnishing: "Fully Furnished",
      availability: "1st Sep 2025",
    },
    {
      title: "Retail Shop In Connaught Place",
      rent: 60000,
      deposit: 70000,
      area: 1200,
      type: "Shop",
      parking: "Street Parking",
      furnishing: "Unfurnished",
      availability: "Immediately",
    },
  ];

  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Header />

      ) : (null)}

      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
        {/* Left Sidebar - Filters */}
        <PropertyFilter
          rent={rent}
          setRent={setRent}
          area={area}
          setArea={setArea}
        />

        <main className="w-full lg:w-3/4 p-4">
          <h2 className="text-lg font-semibold mb-4">
            {properties.length} - Commercial Properties for Rent in Vishali
            Garments, Delhi
          </h2>

          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </main>
      </div>
    </>
  );
};

export default PropertyListing;
