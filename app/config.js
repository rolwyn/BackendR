var config = module.exports;

var Sequelize = require('sequelize'),
    Op = Sequelize.Op;

config.db = {
    username: 'root',
    password: 'root',
    name: 'web_project'
}

config.db.details = {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
    }
}

config.keys = {
    secret: '64a831acbb04b5f95447a9f4fdd2c428'
}