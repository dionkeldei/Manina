var d = {
  config: require('../../../config/database.js'),
  mysql: require('mysql'),
  connection: {},
  connectMySql: function (preset) {
    var con = this.mysql.createConnection({
      host: this.config[preset].host,
      user: this.config[preset].user,
      password: this.config[preset].password,
      database: this.config[preset].database
    });
    return con;
  },
  query: function (query, preset='default') {
    if(this.config[preset].driver == 'mysql'){
      var con = this.connectMySql(preset);
      con.connect(function(err) {
        if (err) throw err;
      });
      var sql = query;
      con.query(sql, function (err, result) {
       if (err) throw err;
      });
      return {
        success: true,
        query: query
      }
    }
  }

}

module.exports = d;
