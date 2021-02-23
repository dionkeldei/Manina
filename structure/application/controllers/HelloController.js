const Controller = require('../../node_modules/framework/controllers/controller');

class HelloController extends Controller {

     index(){
       return "soy index"
     }

     create(){
        return "soy create"
     }

     show(id){
       return 'id:'+id;
     }

     store(request){
       console.log(request)
       return "soy store";
     }

     edit(id){
        return 'soy edit: '+id
     }

     update(request,id){
       console.log(request)
       return "Hola mi request es: "+request+'<br>Y mi id es: '+id;
     }

     delete(request,id){
       return "soy delete: "+id
     }
}

module.exports = HelloController
