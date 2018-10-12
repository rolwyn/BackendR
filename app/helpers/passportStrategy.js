var JWTStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('./../models/user'),
    config = require('./../config');

// hooking JWT Strategy i.e how to check whether jwt is proper, getting the single user info etc.    
function hookJWTStrategy(passport) {
    var options = {};
    options.secretOrKey = config.keys.secret;
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.ignoreExpiration = false;

    passport.use(new JWTStrategy(options, function(JWTPayload, callback) {
       User.findOne({ where: {username : JWTPayload.username}}).then(function(user) {
            if (!user) {
                callback(null, false);
                return;
            }

            callback(null, user);
       }) 
    }));
}

module.exports = hookJWTStrategy;