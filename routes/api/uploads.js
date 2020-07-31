const express = require('express');
const router = express.Router();

// @route GET api/uploads
// @desc Test route
// @access public
router.get('/', (req, res) => {
    res.send('Uploads route');
});

module.exports = router;