const express = require("express");
const burger = require("../models/burger");
router = express.Router;

router.get("/", function(req, res) {
    return res.json(burger)
})

module.exports = router;