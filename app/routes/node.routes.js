module.exports = app => {
    const node_pengukuran = require("../controllers/node.controller.js");
  
    var router = require("express").Router();

    // Retrieve all node_pengukuran
    router.get("/", node_pengukuran.findAll);

    // Retrieve a single node with id
    router.get("/:node_id", node_pengukuran.findOne);

    app.use('/api/node', router);
  };