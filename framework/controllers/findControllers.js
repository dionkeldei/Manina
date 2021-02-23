const obj = {
  get: function () {
    const path = require('path');
    const fs = require('fs');
    var classArr = []
    //joining path of directory
    const directoryPath = './application/controllers';
    //passsing directoryPath and callback function
    var files = fs.readdirSync(directoryPath);
    for(var i in files){
      var clas = require('../../../application/controllers/'+files[i]);
      var obj = {name: clas.name, class: clas}
      classArr.push(obj)
    }
    return classArr;
  }
}

module.exports = obj;
