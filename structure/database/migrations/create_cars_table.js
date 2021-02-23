const Migrations = require('../../node_modules/framework/database/migrations/migrations');

class CarsTable extends Migrations {
    table () {
      var table = this.table_types();
      return {
        name: 'cars',
        table: {
          id: table.integer(255).do(),
          name: table.string(255).do(),
          marca: table.string(255).do(),
          año: table.integer(255).do(),
          placa: table.string(255).do(),
          created_at: table.timeStamp().null().do(),
          updated_at: table.timeStamp().null().do()
        }
      }
    }
}

module.exports = CarsTable
