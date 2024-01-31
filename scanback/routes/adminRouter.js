const app = require('express').Router()
const { request, response } = require('express');
const adminmodel = require("../model/admin");



app.post('/login', async (request, response) => {
    const { email, password } = request.body;


    try {
        const admin = await adminmodel.findOne({ email, password });

        if (admin) { response.json({ success: true, message: 'Login Successfully' }); }

        else { response.json({ success: false, message: 'Invalid Username and email' }); }
    }

    catch (error) { response.status(500).json({ sucess: false, message: 'Error' }) }
})



app.post('/register',(request,response)=>{
    new adminmodel(request.body).save();
    response.send("Admin added Sucessfully")
})
module.exports = app


// http://localhost:4000/admin/login