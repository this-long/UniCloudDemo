const { Controller } = require("uni-cloud-router");
module.exports = class addData extends Controller {
  addData() {
    return this.service.addData.addData();
  }
};