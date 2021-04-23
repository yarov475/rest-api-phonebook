const  express = require('express')
const path = require('path')
const app = express()







//**************************запросы******************

app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.listen(3000,()=> {
    console.log("server has started on port 3000...");
})
