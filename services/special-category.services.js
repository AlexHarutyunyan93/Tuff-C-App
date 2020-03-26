const db = require('../helpers/db');
const Category = db.Category;

module.exports = {
    getCategory
};

async function getCategory(reference) {
    console.log(reference);
    const category = await Category.findOne({categoryreference: reference});
    console.log(category);
    return category;
}
