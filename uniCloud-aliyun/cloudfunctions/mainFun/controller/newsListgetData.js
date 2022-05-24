const { Controller } = require("uni-cloud-router");
module.exports = class newsListgetData extends Controller {
  newsListgetData() {
    return this.service.newsListgetData.newsListgetData();
  }
};