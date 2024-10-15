const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.cookie("Name","Rohit");
    res.send("Cookie set")
})
app.get("/read",(req,res)=>{
    // console.log(req.cookies);
    // res.send("Cookie read")

    bcrypt.genSalt(10, function(err, salt) {
        // bcrypt.hash("myPlaintextPasswordBSDKWALA", salt, function(err, hash) {
        //     // Store hash in your password DB.
        //     console.log(hash);
        //     res.send("That's Good!");
        // });

        // Compare password
        // bcrypt.compare("myPlaintextPasswordBSDKWALA","$2b$10$ams5NkhiMs2HZTFHsG2dv.QQvtPKH5cy1GGjo5vknsBh1Z2dRn4Ce",(err,result)=>{
        //     // console.log(result);
        //     if(result == true){
        //         console.log("Login successfully");                
        //     }else{
        //         console.log("Password inorrect");  
        //     }
        // })
        
        // JWT

        let token = jwt.sign({email:"rohit@gmail.com"},"secret");
        res.cookie("token",token);
        // console.log(token);
        res.send("Done");   
    });
});

app.get("/see",(req,res)=>{
    // console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data);
    res.send(data)
});

app.listen(port,()=>{
    console.log(`App listen on port `,port);
    
})