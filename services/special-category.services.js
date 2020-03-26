const db = require('../helpers/db');
const Category = db.Category;


module.exports = {
    getCategory
};

async function getCategory(reference) {
    const category = await Category.findOne({categoryreference: reference});
    return category;
}
