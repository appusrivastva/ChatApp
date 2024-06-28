import  authRoutes from './routes/auth_routes.js'
import cors from 'cors'; // Import CORS
// import path from 'path';
// import { fileURLToPath } from 'url';

import express from "express"
import connect_db from './database/db.js';

import dotenv from"dotenv";


const app=express();

dotenv.config()
const PORT= process.env.PORT || 7000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRoutes);


app.use(cors()); // Use CORS middleware
// to parse the incoming requestwith json payloads from (req.body)
app.use(express.json());    
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use('/public', express.static(path.join(__dirname, 'public')));

// root route

// app.get('/',(req,res)=>{
//     res.send("hello")
// })

// middleware
// app.get('/api/auth/signup',(req,res)=>{
//     // res.send("hello")
//     console.log("Signup Route")
// })
connect_db()

app.listen(PORT,()=>{

    console.log(`server is running ${PORT}`)
})