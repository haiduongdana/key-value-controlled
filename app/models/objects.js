const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ObjectSchema = new Schema({
    key: { type: String },
    value: { type: String },
    time : { type: Date, default: Date.now }
}, {
    timestamps: true
})

module.exports = mongoose.model('Object', ObjectSchema)
