class Migrations{
  constructor() {
    this.database = require('../database');
  }

  migrate(){
    var migrations = this.get();
    for(var x in migrations){
      var initQuery = ''
      var table = new migrations[x].class
      table = table.table()
      initQuery += "CREATE TABLE "+table.name+" ("
      for(var key in table.table){
        initQuery += key+' '+table.table[key]+', ';
      }
      initQuery = initQuery.slice(0, -2)
      initQuery += ');\n'
      console.log(initQuery);
      console.log(this.database.query(initQuery));
    }
  }

  get () {
    const path = require('path');
    const fs = require('fs');
    var classArr = []
    //joining path of directory
    const directoryPath = './database/migrations';
    //passsing directoryPath and callback function
    var files = fs.readdirSync(directoryPath);
    for(var i in files){
      var clas = require('../../../../database/migrations/'+files[i]);
      var obj = {name: clas.name, class: clas}
      classArr.push(obj)
    }
    return classArr;
  }

  table_types() {
    var extras = function (string) {
      return {
        autoincrement: function () {
          string+=' AUTO_INCREMENT'
          return this
        },
        null: function () {
          string = string.replace("NOT NULL", "");
          return this
        },
        do: function () {
          return string
        }
      }
    }
    return {
      integer: function (num=255){
        var string = 'int NOT NULL'
        return extras(string)
      },
      string: function (num=255){
        var string = "varchar("+num+") NOT NULL"
        return extras(string)
      },
      timeStamp: function (num=255){
        var string = "timestamp NOT NULL"
        return extras(string)
      }
    }
  }


}

module.exports = Migrations
