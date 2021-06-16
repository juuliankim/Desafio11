const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.set('view', './view')
app.set('view engine', 'ejs');

app.use((err, req, res, next) =>{
    console.error(err.message);
    res.status(500).send('Algo se rompió!!');
});

const router = require('./routes/routes');
app.use('/api',router);

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});

server.on('error', error => {
    console.error('Error de servidor: ', error);
});

module.exports = server;