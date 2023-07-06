//const mongoose = require ('mongoose');

const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.ypjdyya.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  connectTimeoutMS: 30000, // Adjust the timeout value as needed
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  // Continue with your application logic
});


// (async()=>{
//     try {
      
//       let connect = await mongoose.connect(`mongodb+srv://employee:employee@cluster0.ypjdyya.mongodb.net/emp?retryWrites=true&w=majority`,
//     );
  
//     if(connect) {
  
//       console.log("database connected")
//     }
//     } catch (error) {
//       console.log(error.message)
//     }
    
//   })()