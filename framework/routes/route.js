class route {
  constructor() {  // Constructor
    const express = require('express')
    this.app = express()
    this.port = 5000
  }

  isFunction(f){
    if (typeof f === 'function') {
      return true
    }
    return false
  }

  get(route,action){
    if(this.isFunction(action)){
      this.app.get(route, (req, res) => {
        res.send(action())
      })
    }
  }

  post(route,action){
    if(this.isFunction(action)){
      this.app.post(route, (req, res) => {
        res.send(action())
      })
    }
  }

  serve(){
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = route;
