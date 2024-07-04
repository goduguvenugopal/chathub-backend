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
    if (exists) {
      res.status(404).json({ message: "user already existed " });
    } else if (!exists) {
      // hashing user password with bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      const saveUser = new User({
        email,
        password: hashedPassword,
      });

      // saving the documet in database
      await saveUser.save();
      res.status(200).json({ message: "user created successfully" });
    }
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

    // checking user existed or not
    if (!exists) {
      res.status(404).json({ message: "email does not existed " });
    }

    // comparing hashed password with user input
    const hashedPassword = await bcrypt.compare(password, exists.password);

    if (!hashedPassword) {
      res.status(401).json({ message: "password not existed " });
    }

    // json token generating
    const token = jwt.sign({ userId: exists._id }, secretKey);

    res.status(200).json({token : token});
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

// delete user controller code

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "user has been deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

module.exports = { createUser, loginUser, getUser, deleteUser };
