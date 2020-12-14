const router = require('express').Router();
let Image = require('../models/images.model');

router.route('/').get((req, res) => {
    Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: ' + error))
})

router.route('/add').post((req, res) => {
    // const username = req.body.username;
    // const id = req.body.id;
    const photo = req.body.photo;
    const description = req.body.description;
    const date = Date.parse(req.body.date);


    const newImage = new Image({
        // id,
        photo, description, date,
    });

    newImage.save()
        .then(() => res.json('Image Added'))
        .catch((err => res.status(400).json('Error: ' + err)))
})

router.route('/:id').get((req, res) => {
    Image.findById(req.params.id)
        .then(image => res.json(image))
        .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/:id').delete((req, res) => {
    Image.findByIdAndDelete(req.params.id)
        .then(() => res.json('Image Deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Image.findById(req.params.id)
        .then(image => {
            image.photo = req.body.photo;
            image.description = req.body.description;
            image.date = Date.parse(req.body.date)

            image.save()
                .then(() => res.json("Updated Image Properties"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json("Error: " + err))
});




module.exports = router;