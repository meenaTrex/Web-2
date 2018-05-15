import express from 'express';
import path from 'path';
import routeApi from './routes/api';
const app = express();

app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use('/', express.static(path.join(__dirname, '/../public')))
app.get('/CourseForm', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/CourseForm.html'))
})


app.use('/api', routeApi);

app.listen(8003, () => console.log('Server started at localhost 8003'));