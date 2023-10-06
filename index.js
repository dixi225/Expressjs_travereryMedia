const express=require('express')
const path=require('path')
const router=require('./Routes/api/memeber')
const app=express()
const port=process.env.PORT||5000
//NORMAL ROUTING
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })


//Setting static folder
app.use(express.static(path.join(__dirname,'public')))

//user api routes
app.use('/api/members',router)

app.listen(port,()=>`Server running at port ${port}`)   