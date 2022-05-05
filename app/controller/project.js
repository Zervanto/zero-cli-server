'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  // 获取项目/组件的代码模板
  getTemplate() {
    const { ctx } = this;
    ctx.body = ctx.model.User.find({});
  }
}
module.exports = ProjectController;
