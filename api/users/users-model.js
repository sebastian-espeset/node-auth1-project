const db = require("../../database/connection")

const fetch = () =>{
    return db("users");
}
module.exports={
    fetch
}
