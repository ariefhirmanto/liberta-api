// module.exports = mongoose => {
//     const collectionName = 'nodekja'
//     const Node = mongoose.model(
//       "nodekja",
//       mongoose.Schema(
//         {
//           node_id: String,
//           humidity: String,
//           temperature: String,
//           turbidity: String,
//           pH: String,
//           dissolved_oxygen: String,
//           voltage: String
//         }
//       ),
//       collectionName
//     );
  
//     return Node;
//   };
  
const mongoose = require("mongoose");
const collectionName = 'nodekja'
const Node = mongoose.model(
  "nodekja",
  new mongoose.Schema(
    {
      node_id: String,
      humidity: String,
      temperature: String,
      turbidity: String,
      pH: String,
      dissolved_oxygen: String,
      voltage: String
    }
  ),
  collectionName
  );

module.exports = Node;