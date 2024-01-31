const app = require('express').Router()
const scanmodel = require("../model/scan");


//For Saving scan data

app.post('/scannew',(request,response)=>{
    new scanmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving scan data
app.get('/scanview',async(request,response)=>{
    var data = await scanmodel.find();
    response.send(data)
})

//For update status of scan -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await scanmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details scan
app.put('/scanedit/:id',async(request,response)=>{
    let id = request.params.id
    await scanmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})

module.exports = app