const dotenv = require('dotenv');
const express = require('express')
const cookieParser = require('cookie-parser')


require ('./db/conn');

dotenv.config({path:'./config.env'});

const Register = require('./models/register');

const router = require('./routes/api');





const app = express();
app.use(cookieParser())

const port =process.env.PORT || 8000;

app.use(express.json());











app.use(router);        // set the route for the api



app.listen(port, () => {
    console.log(`server is running at ${port}`)
});