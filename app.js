const productsRouters = require('./src/routes/productsRouter');
const usersRouters = require ('./src/routes/usersRouter');
const apiRouter = require ('./src/routes/apiRouter');
const mainRouter = require('./src/routes/mainRouter'); // Rutas main
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); 
const session = require('express-session');
const cookieParser = require ('cookie-parser');


// app.use(cors)
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
//app.use(session({secret:'Es un secreto'}));


app.use(cookieParser());
app.use('/products', productsRouters);  // se concatenan las rutas del primer y segundo parámetro 
app.use('/users', usersRouters);
app.use('/API', apiRouter);
app.use('/', mainRouter);



app.listen(process.env.PORT || 3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
});

module.exports = app

