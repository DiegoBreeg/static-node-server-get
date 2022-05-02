import express from "express";
import fs from "fs";
import path from "path";
const app = express();


export default function read(req, res){
    fs.readFile(path.join(path.resolve(),'user.txt'),'utf8', (err, data) => {
        if(err) throw err;        
        res.send(`${data}<br><a href="http://localhost:3000/">voltar</a>`);           
    })    
}