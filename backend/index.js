const express = require('express')
const app = express()
const port = 3000
//LdCcOxKGyZjto2en
const cors=require("cors");
const {posttodo,update,gettodo}=require('./controller.js')
const {connect}=require('./util/db.js')
connect();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  console.log("Request Body:", req.body);  // Log request body if applicable
  next();
});
app.post('/',posttodo);
app.get('/',gettodo);
app.put('/',update);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})