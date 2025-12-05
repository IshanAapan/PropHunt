import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Badge = ({ children }) => (
  <span className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md inline-flex items-center">
    {children}
  </span>
);

const InfoRow = ({ label, value, valueClass = "" }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-3">
    <div className="text-sm text-gray-500">{label}</div>
    <div className={`mt-1 sm:mt-0 font-semibold text-gray-800 ${valueClass}`}>
      {value}
    </div>
  </div>
);

// Simple SVG icon placeholder - replace with real icons if available
const AmenityIcon = ({ title }) => (
  <svg
    className="w-6 h-6 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#E5E7EB"
      strokeWidth="1.5"
      fill="white"
    />
    <text x="12" y="16" fontSize="9" textAnchor="middle" fill="#9CA3AF">
      {title?.[0] ?? "A"}
    </text>
  </svg>
);

const ReviewMetric = ({ title, score }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm w-full md:w-1/3">
    <div className="text-sm text-gray-600">{title}</div>
    <div className="mt-2 font-bold text-2xl text-gray-800">{score}/5</div>
    <div className="text-xs text-gray-500 mt-1">See breakdown</div>
  </div>
);

const SimilarCard = ({ title, price, sqft }) => (
  <div className="bg-white rounded-lg shadow-sm p-3 w-64 flex-shrink-0">
    <div className="h-36 w-full bg-gray-200 flex items-center justify-center rounded-md mb-3">
      Image Placeholder
    </div>
    <div className="text-sm text-gray-500 truncate">{title}</div>
    <div className="font-semibold text-gray-800 mt-1">
      {price} | {sqft}
    </div>
    <div className="text-xs text-gray-500 mt-1">Rajajinagar, Bangalore</div>
  </div>
);

const GetOwnerDetails = () => {
  const navigate = useNavigate();

  // full flattened amenities list (based on screenshot)
  const amenitiesList = [
    "Power Back Up",
    "Lift",
    "Rain Water Harvesting",
    "Club House",
    "Swimming Pool",
    "Park",
    "Reserved Parking",
    "Security",
    "Water Storage",
    "Vaastu Compliant",
    "Service/Goods Lift",
    "Visitor Parking",
    "Intercom Facility",
    "Maintenance Staff",
    "RO Water System",
    "Banquet Hall",
    "Bar/Lounge",
    "Cafeteria/Food Court",
    "Conference Room",
    "Piped Gas",
    "Jogging and Strolling Track",
    "Outdoor Tennis Courts",
    "Private Pool",
    "Private Jacuzzi",
    "Mini Cinema Theatre",
    "Infinity Swimming Pool",
    "Pool with temperature control",
    "Skydeck",
    "Earth quake resistant",
    "Theme based Architectures",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* small breadcrumb / info */}
          <div className="text-sm text-gray-500 mb-4">
            Last contact made 1 day ago
          </div>

          <section className="bg-white rounded-xl shadow-md overflow-hidden border">
            {/* TOP: Gallery + Quick Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
              {/* LEFT: GALLERY */}
              <div className="md:col-span-2">
                <div className="h-56 sm:h-72 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                  Main Image Placeholder
                </div>

                {/* Thumbnails */}
                <div className="mt-3">
                  <div className="hidden md:grid md:grid-cols-4 md:gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-20 bg-gray-200 rounded-md flex items-center justify-center text-xs"
                      >
                        Img {i}
                      </div>
                    ))}
                  </div>

                  <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="min-w-[80px] h-20 bg-gray-200 rounded-md flex items-center justify-center text-xs mx-1"
                      >
                        Img {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: QUICK INFO */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      ₹2.5 Lac
                    </div>
                    <div className="text-sm text-gray-500">
                      + Maintenance & Other Charges
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-sm text-gray-500">
                      3 BHK • 2678 sq-ft
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 justify-start sm:justify-end">
                      <Badge>3 Beds</Badge>
                      <Badge>3 Baths</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-md border text-sm">
                  <div className="grid grid-cols-2 gap-3 text-gray-600">
                    <div>
                      <div className="text-xs">Carpet Area</div>
                      <div className="font-semibold text-gray-800">
                        1874 sqft
                      </div>
                    </div>

                    <div>
                      <div className="text-xs">Developer</div>
                      <div className="font-semibold text-gray-800">
                        Phoenix Mills
                      </div>
                    </div>

                    <div>
                      <div className="text-xs">Floor</div>
                      <div className="font-semibold text-gray-800">
                        11 of 30
                      </div>
                    </div>

                    <div>
                      <div className="text-xs">Status</div>
                      <div className="font-semibold text-gray-800">
                        Immediately
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg shadow transition">
                    Contact Agent
                  </button>

                  <button className="w-full sm:flex-1 border border-blue-400 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
                    Get Phone No.
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT DETAILS + AMENITIES */}
            <div className="border-t px-4 md:px-6 pt-6 pb-8 md:pb-10">
              {/* Property Details */}
              <div className="bg-white rounded-lg p-4 md:p-6 border mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  Property Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Rental Value</div>
                      <div className="font-semibold text-gray-800">
                        ₹2.5 Lac + ₹30,000/month maintenance
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">
                        Security Deposit
                      </div>
                      <div className="font-semibold text-gray-800">₹5 Lac</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-semibold text-gray-800">
                        Opp Sheraton Hotel, Rajajinagar, Bengaluru
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Furnishing</div>
                      <div className="font-semibold text-gray-800">
                        Semi-Furnished
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Flooring</div>
                      <div className="font-semibold text-gray-800">
                        Granite, Marble, Vitrified, Wooden
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Overlooking</div>
                      <div className="font-semibold text-gray-800">
                        Garden, Pool, Main Road
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* === NEW: Single Amenities block (responsive, 3 columns on lg) === */}
              <div className="bg-white rounded-lg p-6 border mb-6">
                <h3 className="text-xl font-semibold mb-6">Amenities</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-4">
                      <AmenityIcon title={amenity} />
                      <div className="text-sm text-gray-700">{amenity}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Properties */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  People also viewed
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
                  <SimilarCard
                    title="4 BHK Flat"
                    price="₹3.1 Lac"
                    sqft="3600 sqft"
                  />
                  <SimilarCard
                    title="4 BHK Flat"
                    price="₹2.3 Lac"
                    sqft="3800 sqft"
                  />
                  <SimilarCard
                    title="4 BHK Flat"
                    price="₹1.9 Lac"
                    sqft="2882 sqft"
                  />
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Project Ratings</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <ReviewMetric title="Infrastructure" score="4.5" />
                  <ReviewMetric title="Amenities" score="4.5" />
                  <ReviewMetric title="Maintenance" score="4.5" />
                </div>
              </div>

              {/* Owner Details */}
              <div className="mt-10 bg-white rounded-lg p-4 md:p-6 border">
                <h3 className="text-xl font-semibold mb-4">Owner Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex flex-col gap-3">
                      <InfoRow label="Owner Name" value="Rajesh Sharma" />
                      <InfoRow label="Contact Number" value="+91 98765 43210" />
                      <InfoRow
                        label="Email ID"
                        value="rajesh.sharma@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <InfoRow
                      label="Property Address"
                      value="C4RR+HXX, Ch Nandlal Tanwar Marg, Vishali Garments, Delhi - 110092"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="w-full sm:w-auto px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    ← Back
                  </button>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="w-full sm:w-auto border border-blue-400 text-blue-600 py-3 px-3 rounded-lg hover:bg-blue-50">
                      Message Owner
                    </button>
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg shadow">
                      Call Owner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GetOwnerDetails;
