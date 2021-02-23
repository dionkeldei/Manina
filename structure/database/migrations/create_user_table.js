const Migrations = require('../../node_modules/framework/database/migrations/migrations');

class UsersTable extends Migrations {
    table () {
      var table = this.table_types();
      return {
        name: 'users',
        table: {
          id: table.integer(255),
          name: table.string(255),
          email: table.string(255),
          password: table.string(255),
          created_at: table.timeStamp(),
          updated_at: table.timeStamp()
        }
      }
    }
}

module.exports = UsersTable
