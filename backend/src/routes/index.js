import express, { Router } from 'express';
import passport from 'passport';
import dotenv from 'dotenv';

// Import Passport Google Strategy
import Passport_Google from '../passport/GoogleStrategy.js';

// Load environment variables
dotenv.config();

// Import your controllers
import { Handle_ContactForm } from '../controllers/contactForm.controller.js';
import { getAlbum } from '../controllers/album.controller.js';
import GoogleAuth_Controller from '../controllers/GoogleAuth.controller.js';
// import { pinoHttp } from 'pino-http';
// import pino from 'pino';

var router = express.Router();

Passport_Google();

import Login_Middleware from '../middleware/Login_middleware.js';

// Router.get('/profile', Login_Middleware , (req, res) => {
//   if (req.session.userId) {
//       res.send(`User ID: ${req.session.userId}`);
//   } else {
//       res.status(401).send('Not authenticated');
//   }
// });

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  GoogleAuth_Controller
);

router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json({ user: req.user }); // Access the user data
});

router.get('/a', (req, res) => {
  console.log(req.session);
  console.log(req.cookies);
  res.send('a');
  // res.json({
  //   "section" : req.session,
  //   "cookie": req.cookies,
  // })
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/set-session', (req, res) => {
  req.session.userId = '6703ca2975e3a7721808b77a'; // Example user ID
  res.send('Session data has been set');
});

router.get('/get-session', (req, res) => {
  res.send(req.session);
});

// router.get('/auth/google/success', (req, res) => {
//   req.user
// });

router.get('/auth/google/failure', (req, res) => {
  res.status(404).json({
    message: 'Authentication failed',
    error: true,
  });
});

/* GET Hero page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
  console.log(req.user);
  res.render('about', { title: 'About CIITM' });
});

router.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact me Boss' });
});

router.get('/gallery', function (req, res) {
  res.render('gallery', { title: 'CIITM Gallery' });
});

router.post('/contact/form/submit', Handle_ContactForm);

router.get('/albums', getAlbum);

export default router;
