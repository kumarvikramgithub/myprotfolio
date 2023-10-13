import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const getToken = async (user) => {
  //generate token
  const token = jwt.sign({ identifier: user._id }, process.env.JWT_SECRET_KEY);
  return token;
};

export default getToken;
