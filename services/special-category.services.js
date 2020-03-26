const db = require('../helpers/db');
const Category = db.Category;

module.exports = {
    getCategory
};

async function getCategory(reference) {
    return await Category.findOne({categoryreference: reference});
}
