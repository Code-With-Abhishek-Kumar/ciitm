import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import StudentAuthentication from '../models/studentAuthenticationSchema.model.js';

const Login_Middleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log(token);
    if (!token) {
      return res.redirect('/auth/google/');
    } else {
      console.log(req.user);
      jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
        let id = decoded.token;
        // console.log('Decoded ID:-', id);
        if (err) {
          return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
      });
    }
    next();
  } catch (error) {}
};

export default Login_Middleware;
