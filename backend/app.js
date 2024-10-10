import createError from 'http-errors';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import lolcat from 'lolcatjs';
import path from 'path';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import ErrorHandler from './src/middleware/ErrorHandler.js';
import passport from 'passport';
import db_connect from './src/middleware/db.connect.js';
import routerMiddleWare from './src/middleware/router.middleware.js';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cookieParser());

// Session middleware

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: false, // Set to true if using HTTPS
      maxAge: 24 * 60 * 60 * 1000, // Session expires after 24 hours
    },
  })
);

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Use Cors

app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set the view engine (EJS)
console.log(__dirname);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/images', express.static(path.join(path.resolve(), 'public' , 'upload')));

// Middleware to log messages with lolcat
app.use((req, res, next) => {
  lolcat.fromString(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(routerMiddleWare);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error Handler Middleware

app.use(ErrorHandler);

// db_connect

db_connect()
  .then(() => {})
  .catch((err) => {
    console.log(err.message);
  });

export default app;
