import GoogleStrategy from passport-google-oauth2;

let Passport_Google = (req, res , next) =>{


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },

  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
    
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

next()

}


export default Passport_Google;