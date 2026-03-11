import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { connectDB }  from './config/db';

import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

//used to parse json in requets body 
app.use(express.json());


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api', routes);


app.get('/', (req, res) => {
    res.send("Hello, world");
});

//use generic error handler for all routes
app.use(errorHandler);


