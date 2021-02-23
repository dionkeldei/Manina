const Controller = require('../../node_modules/framework/controllers/controller');

class CarController extends Controller {

     index(){
       return "soy index"
     }

     store(request){
       return request;
     }

     show(id){

     }
}

module.exports = CarController
