const user = require('../../users')
const express=require('express')

const router=express.Router()
//Get all members

router.get('/',(req,res)=>{
    res.json(user)
})

//Getting a particular member

router.get('/:id',(req,res)=>{
if(req.params.id>=user.length) res.status(404).json(`There is no entry with id no ${req.params.id}`)
else
{
    res.json(user.filter((user)=>user.id==req.params.id))   
}
})

//Creating a member


module.exports=router