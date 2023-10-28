const express = require("express");
const todoRouters = require("./src/routers/todo");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const morgan = require("morgan");
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(morgan("tiny"));
const PORT = process.env.APP_PORT || 3000;

app.use("/test", (req, res) => {
  res.send("hello world");
});




app.use(todoRouters);
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App Running in port: ${PORT}`);
  });
}


module.exports = app;