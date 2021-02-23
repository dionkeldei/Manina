const Controller = require('../../node_modules/framework/controllers/controller');

class HelloController extends Controller {

     index(){
       return "soy index"
     }

     store(request){
       console.log(request)
       return "soy store";
     }

     show(id){
       return 'id:'+id;
     }

     edit(id){
        return 'soy edit: '+id   
     }

     update(request,id){
       console.log(request)
       return "Hola mi request es: "+request+'<br>Y mi id es: '+id;
     }
}

module.exports = HelloController
