const { Controller } = require("uni-cloud-router");
module.exports = class getOneData extends Controller {
  getOneData() {
    return this.service.getOneData.getOneData();
  }
};