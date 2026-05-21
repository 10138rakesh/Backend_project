import dotenv from "dotenv";

dotenv.config({
   path: "./.env"
});
import connectDB from "./db/index.js"
connectDB()
.then(() => {
    console.log("DB Connected Successfully")
})
.catch((err) => {
    console.error("DB Connection Failed:", err);
    process.exit(1);
})      
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

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