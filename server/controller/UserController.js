import bcrypt from "bcrypt";
import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, mob, role, postProperty } = req.body;
    if (!fullname || !email || !password || !mob) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save new user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      mob,
      role,
      postProperty,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    // Create JWT token
    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const forgotPassword = (req, res) => {
  res.send("Forgot Password");
};

const resetPassword = (req, res) => {
  res.send("Reset Password");
};

export { registerUser, loginUser, forgotPassword, resetPassword };
