const user = require('../../users')
const express=require('express')
const uuid=require('uuid')
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
 
router.post('/',(req,res)=>{
    const newMember={
        'id':uuid.v4(),
        'name':req.body.name,
        'email':req.body.email,
        'status':`active`,
    }
    if(!newMember.name||!newMember.email)  res.status(400).json({msg:'Bad Request'})
       
    user.push(newMember)
    res.json(user)
})

//Updating a user

router.put('/:id',(req,res)=>{
    const found=user.some(user=>user.id==req.params.id)
    if(!found) res.status(400).json(`Bad request :- id with ${req.params.id} not exists`)
    const updtdUser=req.body
    if(!updtdUser.name||!updtdUser.email)  res.status(400).json({msg:'Bad Request'})    
    user.map((user)=>{
        if(user.id==req.params.id)
        {
            user.name=updtdUser.name,
            user.email=updtdUser.email
        } 
    })
    res.json({msg: `User updated`,user})
})

//Deleting an user

router.delete('/:id',(req,res)=>{
    const found=user.some(user=>user.id==req.params.id)
    if(!found) res.status(400).json(`Bad request :- id with ${req.params.id} not exists`)
    user.map((users)=>{
        if(users.id==req.params.id)
        {
            const index=user.indexOf(users)
            user.splice(index, 1)
        } 
    })
    res.json({msg: `User Deleted`,user})
})

module.exports=router