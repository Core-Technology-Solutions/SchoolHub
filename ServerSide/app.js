const express = require('express');
const mongoose = require('mongoose');

const userTypeRouter =require('./routes/UserTypeRouter');
const userRouter =require('./routes/userRouter');
const gradeRouter =require('./routes/gradeRouter');
const studentRouter =require('./routes/studentRouter');
const quizRouter =require('./routes/quizRouter');
const subjectRouter =require('./routes/subjectRouter');
const parentRouter =require('./routes/parentRouter');
const staffRouter =require('./routes/staffRouter');

const contactRouter =require('./routes/contactRouter');
const server = express();
const port = process.env.PORT || 8080;

// mongoose.connect("mongodb://127.0.0.1:27017/SchoolHub")
mongoose.connect("mongodb+srv://SH-admin:p2gPnp0b9W42JP5y@cluster0.inazdrw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    .then(() => {
        console.log("DB connection established")
        server.listen(port, ()=>{
            console.log("I'm listening ..")
        });
    })
    .catch((error) => {
        console.log("connection error" + error)
    });
/* -----------------Server layer ----------------- */ 
// First Mw loading -- login
server.use((request, response, next)=>{
    console.log(request.url , request.method);
    // response.status(200).json({message: "Hello, from first Mw loading -- login"});
    next();
});
/* -----------------Routes ----------------- */ 
server.use(express.json());

server.use(userTypeRouter);
server.use(userRouter);
server.use(gradeRouter);
server.use(studentRouter);
server.use(quizRouter);
server.use(subjectRouter);
server.use(parentRouter);
server.use(staffRouter);

server.use(contactRouter);

// Second Mw loading -- authentication
server.use((request, response, next)=>{
    console.log("Second Mw loading -- authentication");
    next();
    // next(new Error("Second Mw throw exception error -- not authenticated"));// jumb to error middleware
});

// 3 Mw loading -- NotFound
server.use((request, response, next)=>{
    response.status(404).json({message: "3 Mw loading -- Page not found"});
    next();
});

// 4 Mw loading -- Error
server.use((error,request, response, next)=>{
    response.status(500).json({message: "4 Mw loading -- Error" + error});
    next();
});