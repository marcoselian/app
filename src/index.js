
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));

//routes
app.use( require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//escuchando al servidor
app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'));
});