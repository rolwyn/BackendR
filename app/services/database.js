var config = require('./../config.js'),
    Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.db.name,
    config.db.username,
    config.db.password,
    config.db.details
);
