module.exports = function () {
    var batteries = require("./batteries").slice();
    
    function query(req, res) {
        res.send(batteries);
    }
    
    function create(req, res) {
        req.body.id=batteries.length+1;
        batteries.push(req.body);
        res.status(201).send();
    }
    function remove(req, res){
        batteries.splice(batteries.findIndex(singleBattery => singleBattery.id === req.params.id), 1);
        res.status(200).send();
    }
    function reset(req, res){
        batteries = require("./batteries").slice();
        res.status(200).send();
    }
    function update(req, res){
        var index = batteries.findIndex(battery => battery.id === parseInt(req.params.id));
        batteries[index] = req.body;
        res.status(200).send();
    }
    
    return {
        query: query,
        create: create,
        remove: remove,
        reset: reset,
        update: update,
    };
};