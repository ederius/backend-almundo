//Packages
const express = require('express');
const app = express();

//Contorllers
const hotelsControllers = require('../../controllers/hotels/hotels');


app
.get('/api/v1/hotel/:id', hotelsControllers.hotelsDetails)
.get('/api/v1/hotels', hotelsControllers.hotelsList);


module.exports.app = app





