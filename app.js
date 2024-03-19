require('./config/db')
const express = require('express');
const app = express();
const cors = require('cors')
const userRouter = require('./routes/user.route')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/users", userRouter)


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})


//router not found
app.use((req,res,next)=>{
    res.status(404).json({
        message:"router not found"
    })
});
//handling server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Something broke"
    })
});
module.exports = app;