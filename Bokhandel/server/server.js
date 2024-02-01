import express from "express"
import mongoose from "mongoose"
import apiRegister from "./api-register.js"

const server = express() 
const port = 3000

//Middleware - ser till att requests blir parsade/skickade som JSON.

server.use(express.json())

mongoose.connect("mongodb+srv://mezea11:hello123@bokhandel.zdw5yso.mongodb.net/Bokhandel")

apiRegister(server, mongoose)

server.listen(port, () => {
    console.log('Listening on port 3000. http://localhost:3000')
})