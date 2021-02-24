const express = require("express");

const server = express();
const UserRouter = require("./users/users-router")

server.use(express.json());

server.use('/api/users',UserRouter)
server.get('/',(req,res)=>{
    res.json({api:` up, hello bubblegum`})
});

module.exports = server;
