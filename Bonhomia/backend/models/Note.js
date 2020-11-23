const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: String,
        content: { type: String, required: true},
        fecha: Date
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);