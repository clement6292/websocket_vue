import { createServer } from "http";
import express from 'express'

const port = 9100;
const app = express();
const serverHttp = createServer(app) 


// configuration avec express avec express on a plus besoin de l'encodage
app.get("/",(req, res)=>{
    res.send("Hello socket ❤🚀⚽")
})

//configuration avec Http 
// const serverHttp = createServer((req , res) =>{
//     res.setHeader('Content-type', 'text/plain; charset-utf-8');
//     res.end("Hello word ❤");

// })
serverHttp.listen(port, ()=> {
    console.log(`Le server ecoute sur le port://localhost:${port}`);
})