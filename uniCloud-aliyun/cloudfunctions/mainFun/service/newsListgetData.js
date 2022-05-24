// 获取新闻，超过2000条
const { Service } = require("uni-cloud-router");
module.exports = class newsListgetData extends Service {
 async newsListgetData() {

	  const db = uniCloud.database();
	  
	  let count=await db.collection('newsList').count()
	  count=count.total
	  var all=[]
	  for(let i=0;i<count;i+=100){
		  let list=await db.collection('newsList').skip(i).get()
		  all=all.concat(list.data)
		  console.log('测试输出',all)
	  }

	  // const collection = db.collection('newsList').get();
    return all
  }
};
