const app = require('express').Router();
const Craft = require('./models/craft');

app.get('/craft', (req, res) => {
    Craft.find({})
        .then(crafts => {
            res.json(crafts);
        })
        .catch(err =>{
            res.json(err);
        })
})

app.post('/craft', (req, res) => {
    console.log(req.body)
    Craft.create(req.body)
        .then(craft => {
            res.json(craft);
         })
        .catch(err => {
            res.json(err);
        })
})

module.exports = app;