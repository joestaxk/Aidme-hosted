const mongoose = require("mongoose");
const config = require("../config/config")
console.log(config.DB_URI)
mongoose.connect(config.DB_URI).then(() => console.log('DB connected successfully')).catch(console.error);

