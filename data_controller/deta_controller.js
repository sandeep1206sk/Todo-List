const Storage = require('node-persist');
Storage.init();

const add_data = async(req,res)=>{
    const {plan} = req.body;
    try{
        const resp= await Storage.setItem(plan,{plan});
        res.status(200).send({message:"data added successfully"})
    }catch(error){
        res.status(202).send({message:"error while adding data",error})
    }
}
const getall_data = async(req,res)=>{
    try{
        const resp = await Storage.values();
        res.status(200).send(resp);
        
    }catch(error){
        res.status(202).send(error);
    }
}
const clear= async function clear(){
    await Storage.init();
    await Storage.clear();
}
module.exports = {add_data,getall_data,clear}