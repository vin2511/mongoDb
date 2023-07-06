const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const connectDb = require ('./config/dbConnection')

  
const app = express();
app.use(express.json());

const port = process.env.PORT   



app.use('/api', require('./routes/userRoute'));
connectDb();
app.listen(port, (err) =>
  console.log(`Server is running on ${port}.`)
);     