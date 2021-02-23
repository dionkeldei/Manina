const Migrations = require('../../node_modules/framework/database/migrations/migrations');

class CarsTable extends Migrations {
    table () {
      var table = this.table_types();
      return {
        name: 'cars',
        table: {
          id: table.integer(255),
          name: table.string(255),
          marca: table.string(255),
          año: table.integer(255),
          placa: table.string(255),
          created_at: table.timeStamp(),
          updated_at: table.timeStamp()
        }
      }
    }
}

module.exports = CarsTable
