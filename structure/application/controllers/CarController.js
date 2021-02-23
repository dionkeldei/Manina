const Controller = require('../../node_modules/framework/controllers/controller');

class CarController extends Controller {

     getCars(id){
       return "soy get cars con id: "+id
     }
}

module.exports = CarController
