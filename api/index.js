import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morseCodeRoute from './routes/morseCode';

mongoose.connect('mongodb://localhost:27017/morsio');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/morseCode', morseCodeRoute);

app.listen(9000, '0.0.0.0');
console.log('api started');
