const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {router} = require("./routes");

const app=express();
const apiPort=2507;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use("/",router);

app.listen(apiPort,()=>{
    console.log(`Servidor iniciado en el puerto ${apiPort}`)
})