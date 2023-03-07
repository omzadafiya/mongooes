const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let counts=0;

event.on("API count",()=>{
    counts++;
    console.log('event called',counts);
})

app.get("/",(req,resp)=>{
    resp.send("api called")
    event.emit("API count");
});

app.get("/search",(req,resp)=>{
    resp.send("search api called")
    event.emit("API count");
});

app.get("/update",(req,resp)=>{
    resp.send("update api called")
    event.emit("API count");
});

app.listen(4000);

