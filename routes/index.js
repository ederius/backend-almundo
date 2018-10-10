//importando todos los archivos que contienen rutas
routesHotels = require('./v1/hotels').app;


//Exportando todos los archivos de rutas desde 1 solo archivo a importar en app.js
module.exports = routesHotels