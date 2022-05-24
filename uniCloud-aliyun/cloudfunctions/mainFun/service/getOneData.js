// 获取单条宠物信息
const { Service } = require("uni-cloud-router");
module.exports = class getOneData extends Service {
  getOneData() {

	  const db = uniCloud.database();

	  const collection = db.collection('animalList').doc(this.ctx.data._id).get()
    return collection
  }
};
