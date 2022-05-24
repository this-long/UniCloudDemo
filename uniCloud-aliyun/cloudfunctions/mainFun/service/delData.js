// 删除宠物信息
const { Service } = require("uni-cloud-router");
module.exports = class delData extends Service {
  delData() {

	  const db = uniCloud.database();

	  const collection = db.collection('animalList').doc(this.ctx.data._id).remove()
    return collection
  }
};

