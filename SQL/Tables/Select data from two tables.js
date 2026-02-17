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
        SELECT
            Student_ID,
            Student_FirstName,
            Student_LastName,
            Student_City,
            Student_Grade
        FROM Students
    `;

    connection.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);

        connection.end();
    });
});
