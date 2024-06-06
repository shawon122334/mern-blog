import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

// installed dotenv and imported so we can use .env in backend
dotenv.config();

const app = express();
//DB connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>{
    console.log("DB connected");
    })
    .catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server in running on 3000');
})

app.use('/api/user',userRoutes);