const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const timeout = require("connect-timeout");



dotenv.config();

// mongoose.connect(process.env.MONGO_URL,
//         {useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true},
//         ()=>{
//     console.log("Connected to MongoDB")
// });

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindandModify: true
     })   
 .then(() => console.log("Connected to MongoDB!"))
 .catch(err => console.log(err));

console.log("Mongo_URL", process.env.MONGO_URL);
//Middleware
app.use(timeout('5s'));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use(express.static(path.join(__dirname, "/distantly-near/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/distantly-near/build', 'index.html'));
});


// const PORT = process.env.PORT || 8800;

app.listen(process.env.PORT || 8800,()=>{
    console.log("Backend server is running");
})

