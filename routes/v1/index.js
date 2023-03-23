const Router = (require("express")).Router();

// Declare route
const authRoute = require("./authRoute")
const userRoute = require("./userRoute")
// Define default paths
const definePath = [
 {
     path: "/auth",
     route: authRoute
 },
 {
   path: "/user",
   route: userRoute
 }
]


definePath.forEach(({path, route}) => {
    Router.use(path, route)
})

module.exports = Router
