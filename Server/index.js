const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/users")
const cors = require('cors');
const contactusRouter = require('./routes/conactus');

const server = express();

corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}

server.use(cors(corsOptions));

server.use(express.json());
server.use('/contactus',contactusRouter)
server.use('/user', userRoutes);

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect('mongodb+srv://DemoUser:demouser123@cluster0.03e2hgr.mongodb.net/chalhitsir');

  console.log("connected to MongoDB");
}


server.listen(3001,()=>{
    console.log('Server is running on port 3001');
})