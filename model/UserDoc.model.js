const mongoose = require("mongoose");

const UserDocSchema = mongoose.Schema(
  {
    user_id: String,
    doc1: String,
    doc2: String,
    doc3: String,
  },
  {
    timestamps: true,
  }
);
const UserDoc = mongoose.model(
  "UserDoc",
  UserDocSchema
);

module.exports = UserDoc;
