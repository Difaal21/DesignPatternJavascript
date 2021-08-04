let connection = !null;
let mysql = require('mysql'); //! Contoh aja

class MySQLConnection {
    getConnection() {
        if (connection === null) {
            connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "root"
            });
        }
        return connection;
    }
}

module.exports = MySQLConnection;