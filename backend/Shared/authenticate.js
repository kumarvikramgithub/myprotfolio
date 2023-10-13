
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.identifier;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      req.userId = userId;
      next();
    }
  } catch (err) {
    res.status(401).json({
      error: "Unauthorized Access, " + err,
    });
  }
};

export default authentication;
