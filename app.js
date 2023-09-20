const express = require('express');
const dotEnv= require('dotenv');
const {adminRoute, frontendRoute } = require('./routes');
const expressEjsLayout = require('express-ejs-layouts');

//configure env
dotEnv.config()


const port = process.env.PORT||3000

const app = express();
//serve static
app.use(express.static(__dirname+'/public'))

//setting the view engine & layouts
app.set('view engine','ejs')
app.use(expressEjsLayout)
app.set('layout', 'pages/admin/layouts/master')
//users routes
//app.use('/', frontendRoute);
//Admin routes
app.use('/admin', adminRoute);

// app.use('*', (req, res)=>{
//    res.send('worked')
// })

// 

const startServer=async()=>{
   try {
       app.listen(port,()=>{
           console.log(`server is running on {http://localhost:${port}}`);
       })
   } catch (error) {
       console.log(Error);
   }
   } 
   startServer()