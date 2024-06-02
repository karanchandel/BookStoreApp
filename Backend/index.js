import express from "express";
import mongoose from  "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "../Backend/route/book.route.js";
import userRoute from "../Backend/route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
// const port = 3000
const PORT=process.env.PORT ||4000;
const URI=process.env.MongoDBURI;
//connect to MongoDb 
try
{
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
console.log("Connect to MongoDb");
}
 catch(error){
console.log("error",error);
}
// app.get('/', (req, res) => {
//   res.send('Bookstore App');
// })

// define routes 
app.use("/book",bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);

})