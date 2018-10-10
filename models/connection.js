const mongoose = require('mongoose');
let conneccion;

var mongoOptions = {
	useNewUrlParser: true
}

if (process.env.NODE_ENV == 'development') { 		//Connect to data base development
	connection = mongoose.connect('mongodb+srv://almundo:kVo1SyMFnoLBIHXv@cluster0-dr6gk.mongodb.net/almundo?retryWrites=true', mongoOptions)
	console.log("development environment pointing to mongo atlas");
}else if (process.env.NODE_ENV == 'production') { 	//conect to data base production
	connection = mongoose.connect('mongodb+srv://almundo-production:kVo1SyMFnoLBIHXv@cluster0-dr6gk.mongodb.net/almundo?retryWrites=true', mongoOptions)
	console.log("prod environment pointing to mongo atlas");
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión!'));
db.once('open', () => console.log('Base de datos almundo abierta') );

module.exports = mongoose;