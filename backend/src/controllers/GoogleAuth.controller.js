import StudentAuthentication from '../models/studentAuthenticationSchema.model.js';
import jwt from 'jsonwebtoken';
import logger from '../middleware/loggermiddleware.js';
import dotenv from 'dotenv';

dotenv.config();

const GoogleAuth_Controller = async (req, res) => {
  try {
    // Log token and user information
    const { token, user } = req.user;
    logger.info('Jwt Secret', process.env.JWT_SECRET);

    if (!user) {
      const error = new Error('User not authenticated');
      error.status = 401;
      throw error;
    }

    logger.info('User:', user);

    if (!token) {
      const error = new Error('Token is missing');
      error.status = 403;
      throw error;
    }

    logger.info(`Fetched User token successfully: ${token}`);

    res.cookie('token', token);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        const error = new Error('Forbidden: Invalid token');
        error.status = 403;
        throw error;
      }

      const id = decoded.token;
      const User = await StudentAuthentication.findById(id);

      if (!User) {
        const error = new Error('User Not Found');
        error.status = 404;
        throw error; // Throwing error if user is not found
      }

      logger.info({ User }, 'Fetched 1 User successfully');
      const role = User.role;
      logger.info(`Fetched User Role successfully: ${role}`);
      logger.info(`Fetched User Token successfully: ${token}`);
      return res.redirect('/');
      // Role-based redirection
      // if (role === 'admin') {
      //   return res.redirect('/admin');
      // } else if (role === 'student') {
      //   return res.redirect('/student');
      // } else if (role === 'teacher') {
      //   return res.redirect('/teacher');
      // } else {
      //   return res.redirect('/');
      // }
    });
  } catch (error) {
    // logger.error({
    //   message: error.message,
    //   status: error.status || 500,
    //   stack: error.stack,
    // });

    return res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
      error: true,
    });
  }
};

export default GoogleAuth_Controller;
