const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const app = express();
const port = process.env.PORT 

const mongoose = require('mongoose')

// const connectdb = async () =>{
//     try {
//         const connect =  await mongoose.connect('mongodb+srv://admin:admin@cluster0.4jhknjt.mongodb.net/mongoDatabase?retryWrites=true&W=majority')
//        if(connect){
//         console.log("Connected to MongoDb");
//        }
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }
 
// connectdb();

app.use('/api', require('./routes/userRoute'));

app.listen(port, (err)=>
    console.log(`Server is running on ${port}.`)
);