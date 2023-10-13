import userModel from "../Model/user-model.js";
import getToken from "../Shared/getToken.js";
import bcrypt from "bcrypt";

export const SignupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "One or more Field(s) are empty" });
  }
  const user = await userModel.findOne({ email: email });

  if (user) {
    return res
      .status(401)
      .json({ error: `User with ${email} is alredy exist.` });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUserData = { firstName, lastName, email, password: hashedPassword };
  try {
    const newUser = await userModel.create(newUserData);
    const token = await getToken(newUser);
    const resData = {
      ...newUser.toJSON(),
      message: `User Signup successfully`,
      token,
    };
    delete resData.password;
    return res.status(201).json(resData);
  } catch (error) {
    return res
      .status(400)
      .json({ error: `Something went wrong while usersignup` });
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "One or more Field(s) are empty" });
  }

  const user = await userModel.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ error: `User with ${email} is not exist.` });
  }
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return res.status(401).json({ error: `Wrong Password` });
  }
  const token = await getToken(user);
  const resData = {
    ...user.toJSON(),
    message: `User Login successfully`,
    token,
  };
  delete resData.password;
  delete resData.__v;
  return res.status(201).json(resData);
};

export const getUsers = async (req, res) =>{
    let users = await userModel.find();
    users = users.map((user) => {
      user = { ...user._doc };
      delete user.password;
      delete user.__v;
      return user;
    });
    return res.status(200).json(users);
}

export const getUsersBy = async (req, res) => {
  const {key, value}  = req.body;
  let users = await userModel.find({[key]:value});
  users = users.map((user)=> {
    user = { ...user._doc };
    delete user.password;
    delete user.__v;
    return user;
  });
  return res.status(200).json(users);
};