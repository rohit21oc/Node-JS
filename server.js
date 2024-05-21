const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/hello"){
        res.end("Hello Students!");
    }else{
        res.end("You are trying to hit wrong url");
    }
});

server.listen(8000,()=>{
    connsole.log("Server is started");
})