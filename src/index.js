import dotenv from "dotenv";

dotenv.config({
   path: "./.env"
});
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import connectDB from "./db/index.js"
connectDB()
// import express from "express"
// const app = express()
// (async()=>{
//     try {
//         mongoose.connect(`${process.env.MONOGODB_URL}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.error(err);
//             throw err;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })

//     }
//     catch(error){
//         console.error(error)
//         throw error
//     }

// })()