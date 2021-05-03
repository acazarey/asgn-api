let router = require('express').Router();
const controller = require("./asgn-controller.js");

router.get("/", function (req, res) {
    res.send("API is up and running");
});

router.route("/asgn")
    .get(controller.list)
    .post(controller.create);

router.route("/asgn/:asgn_id")
    .get(controller.search)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;