
//import json server
const jsonServer = require('json-server')

//create a json server app
const server = jsonServer.create()
// set up path for db.json
const router = jsonServer.router("db.json")
// Return middlewares used by JSON Server
const middleware = jsonServer.defaults()

//set up port
const port = process.env.PORT || 4000

//use router,middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log("JSON server started ar Port 4000");
})