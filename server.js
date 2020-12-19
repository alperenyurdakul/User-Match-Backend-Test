const express = require('express');
require('./db');
const userRoutes = require('./routes/auth-phone');
const app = express();
const uploadRoutes = require('./routes/uploadRoutes');
const matchRoutes = require('./routes/matchRoutes');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/users',userRoutes);
app.use('/image',uploadRoutes);
app.use('/matches',matchRoutes);



//Middleware
//app.use(errorMiddleware);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log('Porta Bağlanıldı');
});
