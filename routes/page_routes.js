const express = require('express');
const router = express.Router();
const passport = require("passport");

const {home} = require('../controllers/page_controller');

router.get('/home', passport.authenticate('jwt', {session: false}), home);

module.exports = router;