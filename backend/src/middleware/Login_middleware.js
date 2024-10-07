import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from './loggermiddleware.js';
dotenv.config();

const Login_Middleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    let session = req.session.userId;

    logger.info(`Fetched User Token successfully: ${token}`);
    logger.info(`Fetched User Session successfully: ${session}`);

    if (!session || !token) {
      let error = new Error('Session expired, please log in again.');
      error.status = 403;
      throw error;
    }

    // res.json({
    //   id: session,
    // });

    console.log(req.user);
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        let error = new Error('Forbidden: Invalid token');
        error.status = 403;
        throw error;
      }

      let id = decoded.token;

      console.log('section', session);

      // Check if the user ID from the token matches the session user ID
      if (session !== id) {
        let error = Error('Forbidden: User ID does not match session');
        error.status = 403;
        throw error;
      }

      next();
    });
    return;
  } catch (error) {
    logger.error(error.message);
    return res.status(error.status || 500).json({
      message: error.message,
      error: true,
    });
  }
};

export default Login_Middleware;
