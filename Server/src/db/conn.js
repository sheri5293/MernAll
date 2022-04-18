
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/tableregister', 
{ useNewUrlParser: true,
     useUnifiedTopology: true }).then(()=>{       // promise return true or false

console.log('connection is setup');             

}).catch((e)=>
{
    console.log('connection is not setup');
});




module.exports = mongoose;