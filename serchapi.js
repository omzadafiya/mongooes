const express = require('express');
require('./confige');
const product = require('./product');

const app = express();
app.use(express.json());

app.get("/search/:key",async (req,resp)=>{
    console.log(req.params.key)
    let data =await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
});
app.listen(6000);