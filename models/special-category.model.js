const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    categoryKey: String,
    categoryFields: Object
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('special-categories', schema);
