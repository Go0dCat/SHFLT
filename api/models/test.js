const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    name: {
        type:String,
        required: [true, 'Name is required']
      },
});

const Scheme = mongoose.model('Test', TestSchema);

module.exports = Scheme;
