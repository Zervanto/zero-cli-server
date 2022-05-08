'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const projectInfo = new Schema({
    _id: String,
    projectName: String,
    projectVersion: String,
  });

  return mongoose.model('Project', projectInfo);
};
