var config = require('./../config.js'),
    Sequelize = require('Sequelize');

module.exports = new Sequelize(config.db.name, config.db.username, config.db.password, config.db.details);
