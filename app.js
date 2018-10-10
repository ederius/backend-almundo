const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser')
      app = express(),
      routes = require('./routes/index');

    //Determinando los origenes de los cuales se da permiso de acceso a la api
    allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    };

    app.use(routes);
    app.use(morgan(':method :url :response-time'));
    app.use(bodyParser.json({limit : '50mb'}));
	app.use(bodyParser.urlencoded({ extended: true, limit : '50mb' }));

	server = require('http').createServer(app);

if (process.env.NODE_ENV == 'development'){
    console.log("Development environment");
	server.listen(process.env.PORT || 8000);
}else if(process.env.NODE_ENV == 'production'){
	console.log("Production Server Environment");
	server.listen(process.env.PORT || 8000);
}


