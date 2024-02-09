import jwt from "jsonwebtoken";

import { config } from "dotenv";
import roles from "../models/RoleModel.js";
config();

const methodData = {
  GET: "READ",
  POST: "CREATE",
  PUT: "UPDATE",
  DELETE: "DELETE",
  PATCH: "UPDATE",
};

//MiddleWare to require authentication
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log(token);

  const userResult = methodData[req.method];
  const routsName = req.baseUrl.split("/")[1];
  const permissionName = `${userResult}_${routsName}`.toUpperCase();

  console.log(permissionName);

  //check json web token exists and is ferified
  if (token) {
    jwt.verify(token, process.env.Secret_key, async (err, user) => {
      if (err) {
        console.log(err.message);
        res.json("unauthorized");
      } else {
        const getUserPermission = await roles
          .findById(user.role)
          .populate("permissions");

        const isAuth = getUserPermission.permissions.some(
          (perr) => perr.name === permissionName
        );
        if (isAuth) {
          next();
        }
        res.json("unauthorized");
      }
    });
  } else {
    res.json("unauthorized");
  }
};

export default requireAuth;
