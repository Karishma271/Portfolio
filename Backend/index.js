//import required modules
const express = require("express");
const path = require("path");
require('dotenv').config();
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;
const dbUrl = process.env.DB_URL;
const client = new MongoClient(dbUrl);

//setup public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: "*",
}));
//Set up app to use json 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//PAGE ROUTES
app.get("/", async (request, response) => {  
    response.status(200).send("Hello I am Up!");
});
app.get("/about", async (request, response) => {
    let aboutInfo = await getAboutInfo();
    console.log(aboutInfo);  

    return response.status(200).json({
        message: "Data Fetched Successfully!",
        data: aboutInfo
    });
});

app.get("/projects", async (request, response) => {
    let projectInfo = await getProjectsInfo();
    console.log(projectInfo);  

    return response.status(200).json({
        message: "Data Fetched Successfully!",
        data: projectInfo
    });
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

//Database functions
// Function to connect with databse 
async function connection(){
    db = client.db("Portfolio_BackEnd");
    return db;
}

// Function to get about info
async function getAboutInfo(){
    db = await connection();
    let results = db.collection("about_info").find({});

    resultArray = await results.toArray();
    return resultArray;
}
// Function to get project info
async function getProjectsInfo(){
    db = await connection();
    let results = db.collection("projects_info").find({});

    resultArray = await results.toArray();
    return resultArray;
}