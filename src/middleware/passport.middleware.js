import express from 'express';
const app = express();
import passportGoogle from '../passport/GoogleStrategy.js';

app.use(passportGoogle());
