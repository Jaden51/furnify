const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current users profile
// @access private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile
            .findOne({ user: req.user.id })
            .populate('user', ['name']);

        if (!profile) {
            return res.status(400).json({
                msg: 'There is no profile for this user'
            })
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route POST api/profile
// @desc Create or update user profile
// @access Private
router.post('/', auth, async (req, res) => {
    const {
        time,
        location,
        phoneNumber,
        productsOrdered,
        productsSold,
        products,
        reviews,
        orders,
        messages,
        favourites
    } = req.body;

    const profileFields = {
        user: req.user.id,
        time,
        location,
        phoneNumber,
        productsSold,
        productsOrdered,
        products,
        reviews,
        orders,
        messages,
        favourites
    };

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile)
        }

        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route GET api/profile
// @desc Create or update user profile
// @access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'email']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route GET api/profile/user/:user_id
// @desc Get profile by user ID
// @access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile
            .findOne({ user: req.params.user_id })
            .populate('user', ['name', 'email']);

        if (!profile)
            return res.status(400).json({ msg: 'Profile not found' })

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind =='ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' })
        }
        res.status(500).send('Server Error')
    }
})

// @route DELETE api/profile
// @desc Delete profile, user and uploads
// @access Private
router.delete('/', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({
            user: req.user.id
        });
        await User.findOneAndRemove({
            _id: req.user.id
        });
        res.json({ msg: 'User deleted' })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route PUT api/profile/products
// @desc Add posted products to profile
// @access Private
router.put('/products', [auth,
[
    // body('title', 'Title is required').not().isEmpty(),
    // body('category', 'Category is required').not().isEmpty(),
    // body('description', 'Description is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        title, category, productType, description, imageLink, price, paymentMethod
    } = req.body;

    const newProduct = {
        title, category, productType, description, imageLink, price, paymentMethod
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id });

        profile.products.unshift(newProduct);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route DELETE api/profile/products/:product_id
// @desc Delete product from profile
// @access Private
router.delete('/products/:product_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeIndex = profile.products
            .map(item => item.id)
            .indexOf(req.params.product_id);
        
        profile.products.splice(removeIndex, 1);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;