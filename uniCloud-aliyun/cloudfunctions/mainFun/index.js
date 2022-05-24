'use strict';
const Router=require("uni-cloud-router").Router;
const router = new Router(require("./config.js"));

exports.main = async (event, context) => {
	//event为客户端上传的参数
	// const db = uniCloud.database();
	// console.log('event : ', event)
	// const collection = db.collection('contacts').get();

	//返回数据给客户端
	return router.serve(event, context);
};
