const MySQLConnection = require('./helpers/databases/mysql_connection');
const connection = new MySQLConnection();

class OrderService {
    save(orderId) {
        connection.getConnection().sql("INSER INTO ORDER....")
    }
}


module.exports = OrderService;