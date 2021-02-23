class route {
  constructor() {  // Constructor
    const express = require('express')
    this.app = express()
    this.port = 5000
  }

  get(route,action){
    this.app.get(route, (req, res) => {
      res.send(action)
    })
  }

  serve(){
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = route;
