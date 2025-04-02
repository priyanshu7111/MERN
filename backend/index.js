const express= require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.send("this is a new mern app")
});

app.listen(4000)