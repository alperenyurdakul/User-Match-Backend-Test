const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.dbURL


mongoose.connect(dbURI,
{   useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>{console.log('Database connection success')})
    .catch((err)=>{console.log(err)});