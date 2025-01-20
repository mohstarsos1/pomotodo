const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.render("pages/home",{title:".: POMOTODO :."});
})

app.get('/about',(req,res)=>{
    res.render("pages/about",{title:".: About :."});
})

const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})