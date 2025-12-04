import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';



const app = express();

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ["GET" , "POST" , "PUT" , "DELETE" , "OPTIONS"],
    allowedHeaders: ["Content-type" , "Athorization"],
}))

const PORT = process.env.PORT || 5500;

app.use(helmet);

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
