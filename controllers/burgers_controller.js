const express = require("express");
const burger = require("../models/burger");
router = express.Router();

// controller will res.render to template engine
// controller handlest the API calls and talks to model to retrieve stuff from DB

router.get("/", function(req, res) {
    burger.all(function(data){
        console.log(data)
        // console.log(data[0])

        let hbsObject = {
            burgers: data
        }

        // console.log(hbsObject)

        res.render("index", hbsObject)
    })
})

module.exports = router;