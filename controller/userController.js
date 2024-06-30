const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
 

dotEnv.config();

const secretKey = process.env.SECRETKEY;

// creating user signup controller logic
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking already user exists with this email
    const exists = await User.findOne({ email });
    if (exists && (await bcrypt.compare(password, exists.password))) {
      res.status(404).json({ message: "user already existed " });
    }

    // hashing user password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const saveUser = new User({
      email,
      password: hashedPassword,
    });

    // saving the documet in database
    await saveUser.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// login controller function
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ email });

    const hashedPassword = await bcrypt.compare(password, exists.password);

    if (!email || !hashedPassword) {
      res.status(404).json({ message: "user not existed " });
    }

    // json token generating
    const token = jwt.sign({ userId: exists._id }, secretKey);

    res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// get user id function
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { createUser, loginUser , getUser};
