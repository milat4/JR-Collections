const express = require('express');
const dotEnv= require('dotenv');

//configure env
dotEnv.config


const port = process.env.PORT||3000

const app = express();

app.use('*', (req, res)=>{
   res.send('worked')
})

app.listen(port,()=>{
   console.log(`server is running on http://localhost:${port}`);
})