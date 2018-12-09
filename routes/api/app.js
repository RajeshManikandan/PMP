const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Importing Model
const App = require('../../models/App');

//@Route    POST
//ACCESS    PUBLIC
//DESC      Route to add new App
router.post('/', (req, res) => {
    const { name, type } = req.body;
    // Create new App
    const newApp = new App({
        name,
        type
    });

    newApp
        .save()
        .then(app => {
            res.json(app);
        })
        .catch(err => res.status(404).send('dbInsertError : ' + err.message));
});

//@Route    GET
//ACCESS    PUBLIC
//DESC      list all App list
router.get('/', (req, res) => {
    App.find()
        .then(Apps => {
            if (Apps === []) res.json('no Apps found');
            else res.json(Apps);
        })
        .catch(err => {
            res.status(404).send('fetchAppsError' + err);
        });
});

//@Route    GET
//ACCESS    PUBLIC
//DESC      Get App based on Id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    App.findById(id)
        .then(Apps => {
            if (Apps === []) res.json('no Apps found');
            else res.json(Apps);
        })
        .catch(err => {
            res.status(404).send('fetchAppsError' + err);
        });
});

//@Route    GET
//ACCESS    PUBLIC
//DESC      delete App
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    App.findByIdAndDelete(id)
        .then(App => res.json(App))
        .catch(err => {
            res.status(404).send('deleteAppError' + err);
        });
});

module.exports = router;
