import Property from "../model/PropertyModel.js";
import User from "../model/UserModel.js";

const postProperty = async (req, res) => {
  try {
    // JWT middleware se user aayega
    const userId = req.user.userId;

    // Property create karte waqt userId attach karo
    const propertyData = {
      ...req.body,
      ownerId: userId, // kisne post ki
    };

    // Save property
    const newProperty = new Property(propertyData);
    await newProperty.save();

    // User ko update karo -> postProperty +1 aur role update
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $inc: { postProperty: 1 }, // count increment
        $set: { role: "owner" }, // role update
      },
      { new: true } // updated user return karega
    );

    res.status(201).json({
      message: "Property posted successfully",
      property: newProperty,
      user,
    });
  } catch (err) {
    console.error("Error in postProperty:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("ownerId", "name email");
    // populate se user ka naam/email bhi aayega

    res.status(200).json({
      message: "All properties fetched successfully",
      count: properties.length,
      properties,
    });
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




const getPropertiesUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const properties = await Property.find({ ownerId: userId });

    res.status(200).json({
      message: "User's properties fetched successfully",
      count: properties.length,
      properties,
    });
  } catch (err) {
    console.error("Error in getPropertiesUser:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export { postProperty, getAllProperties, getPropertiesUser };
