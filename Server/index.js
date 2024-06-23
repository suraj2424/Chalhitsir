const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactusRouter = require('./routes/conactus');

const server = express();
server.use(cors());
server.use(express.json());
server.use('/contactus',contactusRouter.router)


main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/');
  await mongoose.connect(process.env.MONGODB_URL);

  console.log("connected to server");
}


server.listen(process.env.PORT,()=>{
    console.log('Server is running on port 3001');
})