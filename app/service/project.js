'use strict';
const Service = require('egg').Service;

class ProjectService extends Service {
  async getProjectTemplate(obj = {}) {
    const { ctx } = this;
    let data = await ctx.model.Project.find();
    data = JSON.parse(JSON.stringify(data));
    return data;
  }
}

module.exports = ProjectService;
