//Models
const HotelsModel = require('../../models/hotels');


/**
 * Función para consultar listado de hoteles.
 * @param {*} request 
 * @param {*} response 
 */
exports.hotelsList = async (request, response) => {
    try {
        let hotelsList = await HotelsModel.find({});     
        response.status(200).send({code:1, message:"Succces query", data:hotelsList});
    } catch (error) {
        response.status(500).send({code:0, message:"Error in query", error:error});
    }
}

/**
 * Función que consulta los detalles de un hotel en especifico
 * @param {params.id} request 
 * @param {*} response 
 */
exports.hotelsDetails = async (request, response) => {  
    if(request.params.id){
        try {
            let hotelsDetails = await HotelsModel.findById(request.params.id);
            response.status(200).send({code:1, message:"Succces query hotel details", data:hotelsDetails});
        } catch (error) {
            response.status(500).send({code:0, message:"Error in query", error:error});
        }
    }else{
        response.status(500).send({code:0, message:"Parameter id by hotel ir required!!"});

    }
}