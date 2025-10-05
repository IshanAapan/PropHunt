import Property from "../model/PropertyModel.js";
import User from "../model/UserModel.js";

const postProperty = async (req, res) => {
  try {
    const userId = req.user.userId; // coming from JWT middleware
    const propertyData = {
      ...req.body,
      ownerId: userId, // attach the userId here
      role: "owner", // optional: if you want role in property
    };

    // Save property
    const newProperty = new Property(propertyData);
    await newProperty.save();

    // Update user's postProperty count and role
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $inc: { postProperty: 1 },
        role: "owner",
      },
      { new: true }
    );

    res.status(201).json({
      message: "Property posted successfully",
      property: newProperty,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllProperties = async (req, res) => {
  try {
    // Fetch all properties from DB
    const properties = await Property.find();

    res.status(200).json({
      message: "All properties fetched successfully",
      count: properties.length,
      properties,
    });
  } catch (err) {
    console.error("Error fetching properties:", err); // logs the real error
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getPropertiesUser = async (req, res) => {
  try {
    const userId = req.user.userId; // from JWT middleware
    const properties = await Property.find({ ownerId: userId });
    res.status(200).json({
      message: "User's properties fetched successfully",
      count: properties.length,
      properties,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export { postProperty, getAllProperties, getPropertiesUser };
