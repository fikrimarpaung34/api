import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";

import { notFound, errorHandler} from './middlewares.js';
import api from './api/index.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(json());

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);  
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

const allowedOrigins = ['https://pasar-game-client.vercel.app', 'http://localhost:3000', 'http://localhost:5000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

connect();

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
