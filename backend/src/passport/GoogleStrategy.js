// Import necessary libraries and modules
import GoogleStrategy from 'passport-google-oauth2';
import Authentication_Schema from '../models/studentAuthenticationSchema.model.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configure Passport with Google strategy
const Passport_Google = async (req, res) => {
  try {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL:
            process.env.GOOGLE_CALLBACK_URL ||
            'http://localhost:3000/auth/google/callback',
          passReqToCallback: false,
        },
        async (request, accessToken, refreshToken, profile, done) => {
          //! Check if the profile is received
          // console.log('Google Profile', profile);
          if (!profile) {
            throw new Error('Failed to login');
          }

          // Find user by providerId
          let User = await Authentication_Schema.findOne({
            providerId: profile.id,
          });

          // console.log('User ;- ', User);
          if (User) {
            const token = jwt.sign({ token: User.id }, process.env.JWT_SECRET);
            // console.log('token ;- ', token);
            done(null, { user: User, token });
          } else {
            let Created_User = await Authentication_Schema.create({
              providerId: profile.id,
              provider_Name: profile.provider,
              picture: profile.picture,
              provider_displayName: profile.displayName,
            });

            done(null, { Created_User });
          }
        }
      )
    );

    // Serialize user for session management
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    // Deserialize user from session
    passport.deserializeUser((obj, done) => {
      done(null, obj);
    });
  } catch (error) {
    console.error(error.message);
  }
};

// Export the configured Passport Google strategy function
export default Passport_Google;
