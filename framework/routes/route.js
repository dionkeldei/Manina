const methods = require('./routeMethods');

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

  resource(route,action){
    var route = methods.getVariableValues(route);
    var url = ''
    for(var i in route){
      url += '/'+route[i]
    }
    this.get(url,'index@'+action);
    this.get(url+'/create','create@'+action);
    this.get(url+'/:id','show@'+action);
    this.post(url,'store@'+action);
    this.get(url+'/:id/edit','edit@'+action);
    this.post(url+'/:id','update@'+action);
    this.post(url+'/:id/delete','delete@'+action);

  }

  get(route,action){
    if(!methods.isFunction(action)){
      action = methods.getControllerFunction(action, this.controllers)
    }
    this.app.get(route, (req, res) => {
        res.send(methods.constructFunctionWithParams(req,action,route))
    })
  }

  post(route,action){
    if(!methods.isFunction(action)){
      action = methods.getControllerFunction(action, this.controllers)
    }
    this.app.post(route, (req, res) => {
      res.send(methods.constructFunctionWithParams(req,action,route,true))
    })
  }

  serve(){
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = route;
