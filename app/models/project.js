'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const projectInfo = new Schema({
    projectName: { type: String },
    projectVersion: { type: String },
  });

  return mongoose.model('Project', projectInfo);
};
