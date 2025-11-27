import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["Flat", "PG"],
      required: true,
    },
    tenantType: {
      type: String,
      enum: ["Boys", "Girls", "Co-Living", ""],
    },
    roomType: {
      type: String,
      enum: ["single", "double", "triple", ""],
    },
    singleRoomRent: Number,
    doubleRoomRent: Number,
    depositAmouont: Number,
    noticePeriod: Number,
    foodAvailability: {
      type: String,
      enum: ["veg", "non-veg", "both",""],
    },
    acRoom: {
      type: String,
      enum: ["available", "not available","both",""],
    },
    bhkType: {
      type: String,
      enum: ["1RK", "1BHK", "2BHK", "3BHK", "3BHK+",""],
    },
    bathrooms: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    rent:{
      type: Number,
    },
    lookingto: {
      type: String,
      enum: ["rent", "sell", "airbnb",""],
    },
    estimatedEMI: {
      type: Number,
    },
    depositAmount: {
      type: Number,
    },
    builtupArea: {
      type: Number,
    },
    direction: {
      type: String,
      enum: [
        "North",
        "South",
        "East",
        "West",
        "North East",
        "North West",
        "South East",
        "South West",
        ""
      ],
    },
    parking: {
      type: String,
      enum: ["Available", "Not Available",""],
    },
    price: {
      type: Number,
    },
    furnishedStatus: {
      type: String,
      enum: ["Fully Furnished", "Semi Furnished", "Unfurnished",""],
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to User model
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);
export default Property;
