'use strict';

exports.main = async (event, context) => {

	
	console.log('event : ', event)
		let body = JSON.parse(event.body);
		let data,result;
		if (body.dataUrl) {
			// 前端base64   data:image/png;base64,iVBORw0KGgoAAAAN........  把前面data:image/png;base64,去掉再转buffter即可
			body.dataUrl = body.dataUrl.split(',')[1];
			data = Buffer.from(body.dataUrl,'base64');	
		}
		 result = await uniCloud.uploadFile({
			fileContent: data,
			cloudPath: body.name
		})
	
	return result
};
