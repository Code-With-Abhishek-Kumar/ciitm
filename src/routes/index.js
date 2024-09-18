import express from 'express'
var router = express.Router();



import { Handle_ContactForm }  from '../controllers/contactForm.controller.js'; // c stand Form Contact
import { getAlbum }  from '../controllers/album.controller.js'; // c stand Form Contact

/* GET Hero page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('about',  { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me Boss' });
});



router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'CIITM Gallery' });
});


router.post('/contact/form/submit',  Handle_ContactForm);

router.get('/albums',  getAlbum);






export default router;