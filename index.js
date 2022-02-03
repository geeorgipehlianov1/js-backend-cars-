const express = require('express');
const hbs = require('express-handlebars');

const initDb = require('./models/index')
const accessoryService = require('./services/accessory')

const { about } = require('./controllers/about');
const  create  = require('./controllers/create');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const carsService = require('./services/cars')
const deleteCar = require('./controllers/delete')
const editCar = require('./controllers/edit')
const accessory = require('./controllers/accessory')
const attach = require('./controllers/attach')

async function start(){
await initDb()

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carsService())
app.use(accessoryService())

app.get('/', home);
app.get('/about', about)
app.get('/details/:id', details)
app.get('/create', create.get)
app.post('/create', create.post)
app.get('/delete/:id', deleteCar.get)
app.post('/delete/:id', deleteCar.post)
app.get('/edit/:id', editCar.get)
app.post('/edit/:id', editCar.post)
app.get('/accessory', accessory.get)
app.post('/accessory', accessory.post)
app.get('/attach/:id', attach.get)
app.post('/attach/:id', attach.post)

app.all('*', notFound)

app.listen(3000, () => console.log('Server is listening on port 3000...'));
}
start()