const router = require("express").Router();
const Users = require("./users-model");

router.get('/',(req,res)=>{
     Users.fetch()
        .then((users)=>{
            res.status(200).json(users)
        })
        .catch(error=>{
            res.status(400).json({message:error.messages})
        })
})
module.exports=router;
