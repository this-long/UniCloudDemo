// 获取宠物信息
const { Service } = require("uni-cloud-router");
module.exports = class getData extends Service {
  getData() {

	  const db = uniCloud.database();

	  const collection = db.collection('animalList').get();
    return collection
  }
};
