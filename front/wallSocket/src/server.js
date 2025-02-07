import { createServer } from "http";
import express from 'express';
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import  { WebSocketServer }  from "ws";
import { Server } from "socket.io";




const port = 9100;
const app = express();
const serverHttp = createServer(app)

// server de websocket côté server
const io = new Server(serverHttp);



// chemin du fichier serveur en cours d'execution
const __fileName = fileURLToPath (import.meta.url);

// chemin du dossier parent du fichier server
const __dirname = dirname(__fileName);


// middlewares
app.use(express.static(join(__dirname,'../dist')));

// Ecoute de l'evenement connection
io.on("connection", (socket) =>{
 console.log("Nouvelle connexion ", socket.id);

 socket.on("draw", (data) =>{
    console.log(data);
 })

})



// configuration avec express avec express on a plus besoin de l'encodage ce qui fait tourné le port du back sur le même host que le front
app.get("/",(req, res)=>{
    res.sendFile(join(__dirname,"../dist", "index.html"));
})

//configuration avec Http 
// const serverHttp = createServer((req , res) =>{
//     res.setHeader('Content-type', 'text/plain; charset-utf-8');
//     res.end("Hello word ❤");

// })
serverHttp.listen(port, ()=> {
    console.log(`Le server ecoute sur le port://localhost:${port}`);
})