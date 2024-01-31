const express = require("express")
const app = express();
const cors = require('cors');

const adminRouter =require("./routes/adminRouter")
const scanRouter = require('./routes/scanRouter')
const db = require("./connection/Database")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request, response) => {
    response.send("hi database")
})

app.use("/admin", adminRouter);
app.use("/scan", scanRouter);






  app.listen(3500,(request,response)=>
  { console.log("Port ok") })

