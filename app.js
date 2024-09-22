import createError from "http-errors";
import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import passport from "passport";
import db_connect from "./src/middleware/db.connect.js";
import routerMiddleWare from "./src/middleware/router.middleware.js";
import { fileURLToPath } from "url";

const app = express();

app.use(
  session({ secret: "your-secret", resave: false, saveUninitialized: false }),
);
app.use(passport.initialize());
app.use(passport.session());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// db_connect

db_connect();

// Set the view engine (EJS)
console.log(__dirname);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));

app.use(routerMiddleWare);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
