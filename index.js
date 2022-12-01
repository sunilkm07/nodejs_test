const express = require("express");
const app = express();
const port = 8350;
app.get('/',(req,res)=>{
    res.send('Hello world');

});

app.post('/add',(req,res)=>{
    res.send('Hello world post method' );

});


app.listen(port)


