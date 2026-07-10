import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

// ================= SIGNUP =================
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,

      profileImage: "https://i.pravatar.cc/200",

      phone: "",
      bio: "",
      role: "Student",
      careerGoal: "",
      location: "",

      github: "",
      linkedin: "",
      portfolio: "",

      skills: [],
      certificates: [],

      careerScore: 0,
      resumeScore: 0,
      learningProgress: 0,
      learningStreak: 0,
      lastLogin: null,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const userData = user.toObject();
    delete userData.password;

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // ================= LOGIN STREAK =================

    const today = new Date();

    if (!user.lastLogin) {
      user.learningStreak = 1;
    } else {
      const lastLogin = new Date(user.lastLogin);

      const diffTime = today - lastLogin;
      const diffDays = Math.floor(
        diffTime / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 1) {
        user.learningStreak += 1;
      } else if (diffDays > 1) {
        user.learningStreak = 1;
      }
    }

    user.lastLogin = today;

    await user.save();

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const userData = user.toObject();
    delete userData.password;

    res.json({
      success: true,
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET PROFILE =================
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE PROFILE =================
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const {
      name,
      email,
      phone,
      bio,
      role,
      careerGoal,
      location,
      github,
      linkedin,
      portfolio,
      profileImage,
      skills,
      certificates,
      education,
    } = req.body;

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.phone = phone ?? user.phone;
    user.bio = bio ?? user.bio;
    user.role = role ?? user.role;
    user.careerGoal = careerGoal ?? user.careerGoal;
    user.location = location ?? user.location;

    user.github = github ?? user.github;
    user.linkedin = linkedin ?? user.linkedin;
    user.portfolio = portfolio ?? user.portfolio;

    user.profileImage = profileImage ?? user.profileImage;

    user.skills = skills ?? user.skills;
    user.certificates = certificates ?? user.certificates;

    if (education) {
      user.education = {
        college: education.college || "",
        degree: education.degree || "",
        branch: education.branch || "",
        year: education.year || "",
        cgpa: education.cgpa || "",
      };
    }

    await user.save();

    const updatedUser = await User.findById(user._id).select("-password");

    res.json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CHANGE PASSWORD =================
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current Password Incorrect",
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    res.json({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};