import express from 'express';
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
import { pinoHttp } from 'pino-http';
import pino from 'pino';

var router = express.Router();

Passport_Google();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  GoogleAuth_Controller
);

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
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

router.get('/about', function (req, res, next) {
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
