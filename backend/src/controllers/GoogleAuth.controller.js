import StudentAuthentication from '../models/studentAuthenticationSchema.model.js';
import jwt from 'jsonwebtoken';

const GoogleAuth_Controller = async (req, res) => {
  try {
    console.log(req.user);

    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const { token } = req.user;

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
    res.cookie('token', token);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }

      const id = decoded.token;
      const User = await StudentAuthentication.findById(id);

      if (!User) {
        return res.status(404).json({ message: 'User not found' });
      }

      const role = User.role;
      console.log('User Role:', role);

      // Role-based redirection
      if (role === 'admin') {
        return res.redirect('/admin');
      } else if (role === 'student') {
        return res.redirect('/student');
      } else if (role === 'teacher') {
        return res.redirect('/admin'); // or another route for teachers
      } else {
        return res.redirect('/');
      }
    });
  } catch (error) {
    console.warn(error.message);
    // return res.status(500).json({ message: 'Internal server error' });
  }
};

export default GoogleAuth_Controller;
