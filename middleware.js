const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");

dotEnv.config();

const secretKey = process.env.SECRETKEY;

//user token Verifying function
const userToken = (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded user ID to the request object
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { userToken };
