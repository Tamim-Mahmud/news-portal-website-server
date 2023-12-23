const express =require('express');
const categories =require("./data/categories.json");
const news =require("./data/news.json");

const cors= require("cors")

const app =express();
app.use(cors())
const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.send("dragon in running");
})

app.get('/catagories',(req,res)=>{
    res.send(categories)
})
app.get('/news',(req,res)=>{
    res.send(news);
})
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})