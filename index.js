const express=require('express')
const print=console.log
const app=express()
app.set('view engine','ejs')
const path=require('path')
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'public')))//means all your statics going to be in a folder called public

app.get('/',(req,res)=>{
    res.render('hubtel.ejs')
    
})

app.get('*',(req,res)=>{
    res.send('<h1>Undefined route</>')

})



app.post('*',(req,res)=>{
    res.send('<h1>Undefined post route</>')

})
//starting the server
app.listen(3000,()=>{
print('yeah server up and running')
})