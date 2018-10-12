var Sequelize = require('Sequelize'),
    bcrypt = require('bcrypt');

var config = require('./../config'),
    db = require('./../services/database');

// Defining the Model Schema
var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    }
};

// Model Options
var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    }
};

// Defining the User model
var UserModel = db.define('user', modelDefinition, modelOptions);

function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if(err) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

function hashPassword(user) {
    if(user.changed(password)) {
        // Indicating that the password is changed 
        bcrypt.genSalt(10, function(err, salt) {
            return bcrypt.hash(user.password, salt, null, function(err, password) {
               user.password = password; 
            });
        });   
    }
}

module.exports = UserModel;