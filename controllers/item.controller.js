const ItemService = require('../services/item.service');

exports.getItems = async (req, res) => {
    const items = await ItemService.getAllItems();

    return res.json({
        data: items,
    });
}