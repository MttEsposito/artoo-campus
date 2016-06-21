var express = require("express");
var router = express.Router();
var controller = require("./batteries.controller")();

router.get('/', controller.query);
router.post('/', controller.create);
router.post('/:id', controller.update);
router.delete('/:id', controller.remove);
router.get('/reset', controller.reset);

module.exports = {
    router: router,
    name: 'batteries Router',
};
