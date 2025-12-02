import React, { useEffect, useState } from "react";
import PropertyFilter from "../components/PropertyFilter";
import PropertyCard from "../components/PropertyCard";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../redux/features/getAllProperties/GetAllPropertiesSlice";

const PropertyListing = () => {

  const dispatch = useDispatch();

  const { properties, loading, error } = useSelector(
    (state) => state.getAllProp
  );

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const [rent, setRent] = useState(0);
  const [area, setArea] = useState(0);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>Error: {error}</p>;

  const token = localStorage.getItem("token");

  console.log("Properties:->", properties);
  

  return (
    <>
      {token && <Header />}

      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
        {/* Left Sidebar - Filters */}
        <PropertyFilter
          rent={rent}
          setRent={setRent}
          area={area}
          setArea={setArea}
        />

        <main className="w-full lg:w-3/4 p-4">
          {properties?.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </main>
      </div>
    </>
  );
};

export default PropertyListing;
