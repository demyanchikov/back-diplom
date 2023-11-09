const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING 
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Item;
