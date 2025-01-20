const express = require('express')

const app = express()

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render("pages/home",{title:".: POMOTODO :."});
})

const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})