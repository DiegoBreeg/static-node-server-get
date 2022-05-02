import express from "express";
import fs from "fs";
import path from "path";
const app = express();

export default function write(req, res){
    fs.appendFile(path.join(path.resolve(),'user.txt'), `${req.query.text}\n<br>`, (err) => {
        if(err) throw err;
        console.log('Append complete');
    })    
    res.send(`Mensagem enviada com sucesso!
    <a href="http://localhost:3000/">voltar</a>
    `)
    
}