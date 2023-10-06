const express=require('express')
const path=require('path')

const app=express()
const port=process.env.PORT||5000
//NORMAL ROUTING
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
const users=[
{
    id:'1',
    name:'Harsh Dixit',
    email:'harshdixit573@gmail.com',
    status:'Active',
},
{
    id:'2',
    name:'Kanhaiya Sharma',
    email:'iKanhaiya2001@gmail.com',
    status:'Active',
},
{
    id:'3',
    name:'John Doe',
    email:'idontgiveafuck@gmail.com',
    status:'inActive',
},
{
    id:'4',
    name:'Harsh Misra',
    email:'harshmisra21@gmail.com',
    status:'Active',
},
]

//Get all members
app.get('/api/members',(req,res)=>{
    res.json(users)
})

//Setting static folder
app.use(express.static(path.join(__dirname,'public')))

app.listen(port,()=>`Server running at port ${port}`)   