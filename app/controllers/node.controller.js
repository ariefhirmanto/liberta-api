const db = require("../models");
const Node = db.node_pengukuran;

exports.findAll = (req, res) => {
  Node.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single Node with an id
exports.findOne = (req, res) => {  
  Node.find({ node_id: req.params.node_id })
  .then(data => {
      if(!data) {
          return res.status(404).send({
              message: "Node not found " + req.params.node_id
          });            
      }
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Node not found with id " + req.params.node_id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving node with id " + req.params.node_id
      });
  });
};


