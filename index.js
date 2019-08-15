const express = require('express')();
const http = require('http').createServer(express);
const io = require('socket.io')(http);

io.on('connection',client=>{
    console.log('a user connected :D');
    client.on('chat message',msg=>{
        io.emit('chat message',msg);
    })
    client.on('disconnect',err=>{
        console.log("user disconnect :D");
    })
})
express.get('/',(req,res)=>{
	res.send("success connected")
})

http.listen(3000,err=>{
    if(err) throw err;
    console.log("server runing on port 3000");
})
