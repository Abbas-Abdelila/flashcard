import express, { Request, Response } from "express"
import Deck from './models/Deck'
import mongoose from 'mongoose'
import{ config } from 'dotenv'
config();

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
})

app.post('/decks', async (req:Request, res:Response) => {
    const newDeck = new Deck({
        title : req.body.title 
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
})

app.get('/hello', (req: Request, res:Response) => {
    res.send("THis is the Hello World Page Honey!")
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    app.listen(PORT);
    console.log(`Listening at port ${PORT}...`);
})




