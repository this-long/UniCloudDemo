const { Controller } = require("uni-cloud-router");
module.exports = class delData extends Controller {
  delData() {
    return this.service.delData.delData();
  }
};