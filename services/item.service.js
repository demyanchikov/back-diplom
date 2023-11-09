const ItemModel = require('../models/item.model');

exports.getAllItems = () => {
    return ItemModel.findAll();
}