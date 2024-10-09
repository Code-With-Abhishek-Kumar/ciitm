import StudentAuthentication from '../models/AuthenticationSchema.model.js';
import jwt from 'jsonwebtoken';
import logger from '../middleware/loggerMiddleware.js';
import dotenv from 'dotenv';

dotenv.config();

const GoogleAuth_Controller = async (req, res) => {
  try {
    const { token, user } = req.user; // Assuming req.user is populated by Passport

    // Check if the user is authenticated
    if (!user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Check if the token is available
    if (!token) {
      return res.status(403).json({ message: 'Token is missing' });
    }

    logger.info('User:', user);
    logger.info(`Fetched User token successfully: ${token}`);

    // Set session and cookie
    req.session.userId = user.id; // Ensure req.session is set correctly
    // res.cookie('token', token);
    res.cookie('token', token, {
      httpOnly: true, // Prevents JavaScript from accessing the cookie (helps mitigate XSS attacks)
      secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent only over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // Sets the cookie's expiration to 1 day
      sameSite: 'strict', // Helps prevent CSRF attacks by restricting how cookies are sent with cross-origin requests
    });

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }

      const id = decoded.token; // Adjust according to your token structure
      const User = await StudentAuthentication.findById(id);

      // Check if user was found
      if (!User) {
        return res.status(404).json({ message: 'User Not Found' });
      }

      logger.info({ User }, 'Fetched User successfully');

      // res.redirect('/')

      // Send the response
      return res.status(200).json({ message: 'Login successful', user: User });
    });
  } catch (error) {
    logger.error({
      message: error.message,
      status: error.status || 500,
      stack: error.stack,
    });

    // Make sure to send a response in case of an error
    if (!res.headersSent) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal Server Error',
        error: true,
      });
    }
  }
};

export default GoogleAuth_Controller;
