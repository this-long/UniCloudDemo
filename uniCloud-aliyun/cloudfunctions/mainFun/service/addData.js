// 添加宠物信息
const {
	Service
} = require("uni-cloud-router");
module.exports = class addData extends Service {
	addData() {

		const db = uniCloud.database();

		const collection = db.collection('animalList').add(
		// this.ctx.data
		this.ctx.data
		
	
		)
		console.log(this.ctx.data)
		return collection
	}
};
