import express from 'express';
import path from 'path';
import session from 'express-session';
const app = express();

app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))
import routeApi from './routes/api';
app.use('/api', routeApi);

app.listen(8003, () => console.log('Server started at localhost 8003'));