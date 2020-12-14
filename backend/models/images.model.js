const mongoose = require('mongoose')
const Schema = mongoose.Schema


const imageSchema = new Schema({
    id: { type: String, requried: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: false }
},
    {
        timestamps: true,
    }
)

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;