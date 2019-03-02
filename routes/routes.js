
let express = require('express')
let router = express.Router()

router.get('/api', (req, res) => {
    //This returns the received parameters as a json object
    res.send("hello");
})

module.exports = router;
