const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    photo: {type: Buffer},
    photoId: {type: Number, required: true},
    photoName: {type: String},
    photoDescription: {type: String},
    createTime: {type: Date, default: Date.now},
    updateTime: {type: Date, default: Date.now},
    user: {type: Number},
});

const Photo = mongoose.model('Photo', photoSchema);
const photo = new Photo({
    photoId: 2312, 
    photoName: 'jfksdn'
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
    await user.save();
    await mongoose.disconnect();    
}

main().catch(console.log())

// app.get('/gallery', (req, res) => {
//     res.json('dad')
// })

app.post('/gallery', jsonParser, (req, res) => {
    console.log(req.body)
})

app.listen(port)