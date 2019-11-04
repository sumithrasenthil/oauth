const passport =require('passport');
const GoogleStrategy =require('passport-google-oauth20');
const keys=require('./keys');
passport.use(
    new GoogleStrategy({
    //passport

   clientID :keys.google.clientID,
    clientSecret :keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'

    },function(accessToken,refreshToken,profile,done){
    console.log("Fired a callback function");
    console.log(profile);
})
);
