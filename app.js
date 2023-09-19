const express = require('express');
const dotEnv= require('dotenv');
const {adminRoute, frontendRoute, } = require('./routes');
const expressEjsLayouts = require('express-ejs-layouts');

//configure env
dotEnv.config()


const port = process.env.PORT||3000

const app = express();
//serve static
aap.use(express.static(__dirname+'/public'))

//setting the view engine
app.set('view', 'ejs')
app.use(expressEjsLayouts())
//users routes
app.use('/', frontendRoute)
app.use('/admin', adminRoute)

// app.use('*', (req, res)=>{
//    res.send('worked')
// })

app.listen(port,()=>{
   console.log(`server is running on http://localhost:${port}`);
})