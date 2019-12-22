const {CategoryDB} =require('./SchemaDB')
class DatabaseApp {
    constructor(){

    }

    async getAllCategory(){
        return await CategoryDB.find({});
    }

    async updateCategory(objCategory){
        const {id,count}=objCategory;
        if(id==='all')
            return null;
        const objCheck=await CategoryDB.findOne({id:id});
        console.log('test', objCheck);
        if(objCheck===null){
            const add = await CategoryDB.create(objCategory);
            console.log("new obj:",add);
            return add;
        } else {

            if(objCheck.count!==count){
                objCheck.count= count;
            }
            const save=  await objCheck.save();
          //   console.log(save);
            return save
        }
        // return objCheck;
    }
}
 module.exports=DatabaseApp; 