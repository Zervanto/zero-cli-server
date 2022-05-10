'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const projectSchema = new Schema({
    _id: { type: String },
    projectName: { type: String },
    projectVersion: { type: String },
  });
  return mongoose.model('Project', projectSchema, 'project');
};
