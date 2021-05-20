const express = require('express'),
router = express.Router(),
bycrypt = require('bcryptjs'),
UserModel = require('../models/usersModel');

// Gets
router.get("username", async (req, res) => {
    const { username } = req.query;
    console.log("This is the username", username);
    
})






router.post('/signup', async (req, res, next) => {
const { username, password, first_name, last_name, weight, height_ft, height_in, age, phone_num } = req.body;
});



// Posts
router.post('/login', async (req, res) => {
const { username, password  } = req.body;
const user = new UserModel(null, username, password, null, null, null, null, null, null, null, null);
const response = await user.login();
if(!!response.isValid) {
    //do stuff if a user is loggen in
    req.session.is_logged_in = response.isValid;
    req.session.user_id = response.user_id;
    req.session.username = response.username;
    res.redirect('/profile');
}else {
    res.sendStatus(403);
}
});

router.post('/signup', async (req, res) => {
const { username, password, first_name, last_name, weight, height_ft, height_in, age, phone_num } = req.body;
const salt = bycrypt.genSaltSync(10);
const hash = bycrypt.hashSync(password, salt);
const response = await UserModel.addUser (
    username,
    hash,
    first_name,
    last_name,
    weight,
    height_ft,
    height_in, 
    age,
    phone_num
);
if(response.id) {
    res.redirect('/');
}else {
    res.send("Error: please try again").status(500);
}
});

router.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
    })




module.exports = router;