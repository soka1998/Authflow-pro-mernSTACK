import jwt from "jsonwebtoken";

import { config } from "dotenv";
config();

//MiddleWare to require authentication
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  //check json web token exists and is ferified
  if (token) {
    jwt.verify(token, process.env.Secret_key, (err) => {
      if (err) {
        console.log(err.message);
        res.json("unauthorized");
      } else {
        next();
      }
    });
  } else {
    res.json("unauthorized");
  }
};

export default requireAuth;
