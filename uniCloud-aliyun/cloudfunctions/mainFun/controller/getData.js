const { Controller } = require("uni-cloud-router");
module.exports = class getData extends Controller {
  getData() {
    return this.service.getData.getData();
  }
};