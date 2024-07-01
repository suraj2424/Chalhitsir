const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const cors = require("cors");
const contactusRouter = require("./routes/conactus");
const https = require("https");
const dotenv = require("dotenv").config();
require('dotenv').config();

const server = express();

corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

server.use(cors(corsOptions));

server.use(express.json());
server.use("/contactus", contactusRouter);
server.use("/user", userRoutes);

server.get('/',(req,res)=>{
  res.status(201).json({message:'Connected to ChalHitSir Backend!'});
});

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect(
    "mongodb+srv://DemoUser:demouser123@cluster0.03e2hgr.mongodb.net/chalhitsir"
  );
  console.log("connected to MongoDB");
}

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});

function generateAuthToken() {
  const options = {
    hostname: "outpost.mapmyindia.com",
    path: "/api/security/oauth/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret,
  });

  const req = https.request(options, (res) => {
    let responseData = "";

    res.on("data", (chunk) => {
      responseData += chunk;
    });

    res.on("end", () => {
      const parsedData = JSON.parse(responseData);
      const token = parsedData.access_token;
      // Handle the token (e.g., store it or use it for subsequent requests)
      console.log(token);
    });
  });

  req.on("error", (error) => {
    console.error("An error occurred:", error.message);
  });

  req.write(data.toString());
  req.end();
}

// Call the function to generate the token
generateAuthToken();
