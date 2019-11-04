
const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


//callback redirect
router.get('/google/redirect',passport.authenticate('google'),function(req,res){
   res.send("Succesfully redirected...")
});
module.exports = router;
