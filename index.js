const server = require("./api/server");

const port = process.env.PORT || 3333;
server.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})