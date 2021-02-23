class route {
  constructor() {  // Constructor
    const express = require('express')
    const findControllers = require('../controllers/findControllers');
    this.app = express()
    this.port = 5000
    this.controllers = findControllers.get();
    this.app.use(express.json());       // to support JSON-encoded bodies
    this.app.use(express.urlencoded({
      extended: true
    }));
  }

  isFunction(f){
    if (typeof f === 'function') {
      return true
    }
    return false
  }

  getControllerFunction(string){
    var arr = string.split("@");
    var desired = {function: arr[0], controller: arr[1]}
    var controllerObj = this.controllers.filter(obj => {
       return obj.name == desired.controller
    });
    if(controllerObj[0] == undefined){
      console.log("Controller '"+desired.controller+"' not found in routes file")
      process.exit()
    }
    var controller = new controllerObj[0].class
    var func = controller[desired.function]
    if(func == undefined){
      console.log('Function "'+desired.function+'" not found in "'+desired.controller+'"');
      process.exit();
    }
    return func;

  }

  get(route,action){
    if(!this.isFunction(action)){
      action = this.getControllerFunction(action)
    }
    this.app.get(route, (req, res) => {
      res.send(action())
    })
  }

  post(route,action){
    if(!this.isFunction(action)){
      action = this.getControllerFunction(action)
    }
    this.app.post(route, (req, res) => {
      res.send(action(req.body))
    })
  }

  serve(){
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = route;
