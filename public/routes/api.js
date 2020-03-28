const express = require('express');

const router = express.Router();

const blggdata = require('../models/blgs');
const spentdata = require('../models/blgs');

router.get('/api', (req, res) => {

    blggdata.find({ })
        .then((data) => {
            res.json(data);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    
});


router.post('/api/save', (req, res) => {
    console.log(req.body);
    const dataa = req.body;
    console.log(dataa);
    const newblg = new blggdata(dataa);

    newblg.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'sorry internet issue' })
            return;
        } 
           return  res.json(
                {
                    msg: 'msg is published'
                });
    });
});


router.post('/api/spent', (req, res) => {
    console.log(req.body);
    const dataa = req.body;
    console.log('here');
    console.log(dataa);
    const newspent = new spentdata(dataa);

    newspent.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'sorry internet issue' })
            return;
        } 
           return  res.json(
                {
                    msg: 'msg is published'
                });
    });
});


module.exports = router;