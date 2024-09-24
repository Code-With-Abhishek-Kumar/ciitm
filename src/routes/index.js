import express from 'express';
import passport from 'passport';
import Passport_Google from '../passport/GoogleStrategy.js';

var router = express.Router();

import { Handle_ContactForm } from '../controllers/contactForm.controller.js'; // c stand Form Contact
import { getAlbum } from '../controllers/album.controller.js'; // c stand Form Contact

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

Passport_Google();

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/admin',
    // failureMessage: "Not",
    failureRedirect: '/auth/google/failure',
  })
);

// Additional routes
// router.get('/gallery', (req, res) => {
//   res.send('Failed to authenticate.');
// });

// Additional routes
router.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate.');
});

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
};

/* GET Hero page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact me Boss' });
});

router.get('/gallery', function (req, res, next) {
  res.render('gallery', { title: 'CIITM Gallery' });
});

router.post('/contact/form/submit', Handle_ContactForm);

router.get('/albums', getAlbum);

export default router;
