const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");

dotEnv.config();

const secretKey = process.env.SECRETKEY;
const secretKey1 = process.env.SECRETKEY1;

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

// pofile token verifiying function

const profileToken = (req, res, next) => {
  try {
    const token = req.headers.token;

    // token checking
    if (!token) {
      res.status(404).json({ message: "token not found" });
    }

    // decoding token
    const decoded = jwt.verify(token, secretKey1);

    // attaching the decoded user id to the request object
    req.profileId = decoded.profileId;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { userToken , profileToken}
