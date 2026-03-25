import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { connectDB }  from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

//used to parse json in requets body 
app.use(express.json());

app.use(cors());


app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api', routes);


app.get('/', (req, res) => {
    res.send("Hello, world");
});

//use generic error handler for all routes
app.use(errorHandler);


