const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  project_name: {
    type: String,
    required: true
  },
  suits: [
    {
      type: Schema.Types.ObjectId,
      ref: "suites"
    }
  ]
});

module.exports = mongoose.model("projects", ProjectSchema);
