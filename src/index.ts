import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

//used to parse json in requets body 
app.use(express.json());


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/api', routes);


app.get('/', (req, res) => {
    res.send("Hello, world");
});

//use generic error handler for all routes
app.use(errorHandler);


