import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";
import cors from "cors";

dotenv.config();
const mongoURI = process.env.MONGODB;
const fronEndHost = process.env.FRONTENDHOST;
var app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    fronEndHost || "http://localhost:5000"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`YEEEESS Mongoose connected to ${mongoURI}`);
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/", (req, res) => {
  res.send("server is ready");
});

// ERROR catch
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

var port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

// const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at htttp://localhost:${port}`);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
