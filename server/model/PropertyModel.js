import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
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
    enum: ["Boys", "Girls", "Co-Living"],
  },
  roomType: {
    type: String,
    enum: ["Single Sharing", "Double Sharing", "Triple Sharing"],
  },
  singleRoomRent: Number,
  doubleRoomRent: Number,
  depositAmouont: Number,
  noticePeriod: Number,
  foodAvailability: {
    type: String,
    enum: ["Veg", "Non-Veg", "Both (Veg & Non-Veg)"],
  },
  acRoom: {
    type: String,
    enum: ["AC", "Non-AC"],
  },
  bhkType: {
    type: String,
    enum: ["1RK", "1BHK", "2BHK", "3BHK", "3BHK+"],
  },
  bathrooms: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  lookingto: {
    type: String,
    enum: ["rent", "sale", "airbnb"],
  },
  estimatedEMI: {
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
      "North-East",
      "North-West",
      "South-East",
      "South-West",
    ],
  },
  parking: {
    type: String,
    enum: ["Available", "Not Available"],
  },
  price: {
    type: Number,
  },
  furnishingStatus: {
    type: String,
    enum: ["Furnished", "Semi-Furnished", "Unfurnished"],
  },
});

const Property = mongoose.model("Property", PropertySchema);
export default Property;
