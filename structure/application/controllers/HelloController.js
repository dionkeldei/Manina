const Controller = require('../../node_modules/framework/controllers/controller');

class HelloController extends Controller {
     index(){
       return "soy index"
     }

     store(request){
       return request;
     }
}

module.exports = HelloController
