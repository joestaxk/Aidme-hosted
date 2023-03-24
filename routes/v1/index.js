const Router = (require("express")).Router();

// Declare route
const authClient = require("./auth/client")
const authErrander = require("./auth/errander")

// USER - [CLIENT, ERRANDER]
const userClient = require("./users/client")
const userErrander= require("./users/errander")

// Define default paths
const definePath = [
 {
     path: "/client/auth",
     route: authClient
 },
 {
    path: "/errander/auth",
    route: authErrander
 },

 {
    path: "/client",
    route: userClient
 },
 {
    path: "/errander",
    route: userErrander
 }
]


definePath.forEach(({path, route}) => {
    Router.use(path, route)
})

module.exports = Router
