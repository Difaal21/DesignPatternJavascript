const MySQLConnection = require('./helpers/databases/mysql_connection')
const connection = new MySQLConnection();

class OrderDetailService {
    save(orderId) {
        connection.getConnection().sql("INSERT INTO")
    }
}

module.exports = OrderDetailService;