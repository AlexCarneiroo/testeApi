const express = require('express')

const app = express();


app.use(express.json())

app.get('/', (req,res)=>{
    return res.json({messge:'Servidor pegando'})
})

app.listen(1000)