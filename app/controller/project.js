'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  // 获取项目/组件的代码模板
  async getTemplate(obj = {}) {
    const { ctx } = this;
    // console.log(ctx.model);
    try {
      const data = await ctx.model.Project.find({}).lean();
      ctx.body = {
        res: data,
      };

      console.log('----------', data);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = ProjectController;
