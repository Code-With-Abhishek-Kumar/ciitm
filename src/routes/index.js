import express from 'express'
var router = express.Router();



import { Handle_ContactForm }  from '../controllers/contactForm.controller.js'; // c stand Form Contact

/* GET Hero page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('about',  { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'CIITM Gallery' });
});


router.post('/contact/form/submit',  Handle_ContactForm);






export default router;