const express = require("express");
const burger = require("../models/burger");
router = express.Router;

// controller will res.render to template engine
// controller handlest the API calls and talks to model to retrieve stuff from DB

router.get("/", function(req, res) {
    burger.all(function(data){
        console.log(data)
        // res.render("index", )
    })
})

module.exports = router;