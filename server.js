import read from "./modules/read.js";
import write from "./modules/write.js";
import express from "express";
import path from "path";

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(path.resolve(), 'index.html')))

app.get('/write', (req, res)=> write(req, res));

app.get('/read', (req, res) => read(req, res));

app.listen(3000, () => console.log('servidor online'));
