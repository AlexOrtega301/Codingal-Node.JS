const mysql = require("mysql2");

// My Cool IP:
const connection = mysql.createConnection({
    host: "myhost.ip",
    user: "my_user.admin",
    password: "############",
    database: "my_cool-database.sql",
    port: 3306  
});
connection.connect(err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Connected to database");

    const sql = `
        DELETE FROM Students
        WHERE Student_ID = 102c
    `;

    connection.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Rows deleted:", result.affectedRows);

        connection.end();
    });
});
