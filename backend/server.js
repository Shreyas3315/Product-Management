const express = require('express');
const connectDB = require('./Database/db');
const cors = require('cors');
const productRoutes = require('./Routes/productRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/products',productRoutes);

app.listen(5000,()=>{
    console.log("App running successfully on Port 5000");
});