const asgn = require("./asgn-model");

exports.list = function (req, res) {
    asgn.get(function (err, asgns) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        };
        res.json({
            status: "success",
            message: "Assignments retrieved",
            data: asgns
        });
    });
};

exports.create = function (req, res) {
    var asgnDB = new asgn();
    asgnDB.courseName = req.body.courseName ? req.body.courseName : asgnDB.courseName;
    asgnDB.asgnName = req.body.asgnName;
    asgnDB.dueDate = req.body.dueDate;

    asgnDB.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment created",
            data: asgnDB
        });
    });
};

exports.search = function (req, res) {
    asgn.findById(req.params.asgn_id, function (err, asgns) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Assignments loaded",
            data: asgns
        })
    })
}

exports.update = function (req, res) {
    asgn.findById(req.params.asgn_id, function (err, asgnDB) {
        if (err) {
            res.send(err);
        }
        asgnDB.courseName = req.body.courseName ? req.body.courseName : asgn.courseName;
        asgnDB.asgnName = req.body.asgnName;
        asgnDB.dueDate = req.body.dueDate;

        asgnDB.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment updated",
                data: asgnDB
            });
        });
    });
};

exports.delete = function (req,res) {
    asgn.remove({_id: req.params.asgn_id}, function (err, asgn) {
        if (err) {
            res.json(err);
        };
        res.json({
            status: "success",
            message: "Contact deleted"
        });
    }
    );
};