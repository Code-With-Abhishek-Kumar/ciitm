import GoogleStrategy from 'passport-google-oauth2';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

const Passport_Google = () => {
  try {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: 'http://localhost:3000/auth/google/callback',
          passReqToCallback: true,
        },
        (request, accessToken, refreshToken, profile, done) => {
          console.log(profile);

          // Check if profile exists
          if (!profile) {
            return done(new Error('Failed to login'));
          }

          // Here you would typically find or create the user in your database
          // User.findOrCreate({ googleId: profile.id }, (err, user) => {
          //   return done(err, user);
          // });

          // For now, just return the profile
          return done(null, profile);
        }
      )
    );

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((obj, done) => {
      done(null, obj);
    });
  } catch (error) {
    console.error('Error setting up Google strategy:', error.message);
  }
};

export default Passport_Google;
