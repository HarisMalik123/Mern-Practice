const express=require('express')
const app=express()
const port=process.env.PORT || 3000
let blogs=[

]
app.get('/',(req,res)=>{
    res.json(blogs)
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})