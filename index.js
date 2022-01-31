const express = require('express');
const hbs = require('express-handlebars');

const { about } = require('./controllers/about');
const  create  = require('./controllers/create');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const carsService = require('./services/cars')

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carsService())

app.get('/', home);
app.get('/about', about)
app.get('/details/:id', details)
app.get('/create', create.get)
app.post('/create', create.post)

app.all('*', notFound)

app.listen(3000, () => console.log('Server is listening on port 3000...'));