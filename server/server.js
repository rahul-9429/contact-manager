const express = require('express');
const errorHandler = require('./middleware/errorHandler.js');
const app = express();app.use(express.json());
const connectDB = require('./config/dbconntection.js')
const port = process.env.PORT || 8000;
connectDB();


app.use('/api/contacts', require('./routes/contacts.js'));
app.use('/api/user', require('./routes/userRoute.js'));
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})