var d = {
  config: require('../../../config/database.js'),
  mysql: require('mysql'),
  connection: {},
  connect: function () {
    var con = this.mysql.createConnection({
      host: this.config.host,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database
    });
    return con;
  },
  query: function (query) {
    var con = this.connect();
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

module.exports = d;
