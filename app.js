const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");


const logInRoute = require('../server/Routes/v1/login.route')
const signUpRoute = require('../server/Routes/v1/signup.route');
const adminRoute = require('../server/Routes/v1/admin.route');
const courseRoute = require('../server/Routes/v1/course.route');
const userRoute = require('../server/Routes/v1/user.route');

const mongooseErrorHandler = require("./middleware/mongooseErrorHandler");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/uploads", express.static("./uploads"));


app.use('/login', logInRoute)
app.use('/signup', signUpRoute)
app.use('/admin', adminRoute)
app.use('/course', courseRoute)
app.use('/user', userRoute)

app.use(mongooseErrorHandler);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
