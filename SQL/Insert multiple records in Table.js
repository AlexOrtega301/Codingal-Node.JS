const mysql = require("mysql2");

// Create connection
const connection = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_CodingalRoboto24",
    password: "?7d#W&r9%k#u7V8",
    database: "freedb_WindowsXP",
    port: 3306  
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");

    // SQL query to insert or update if duplicate
    const sql = `
        INSERT INTO Students (Student_ID, Student_FirstName, Student_LastName, Student_City, Student_Grade)
        VALUES ?
        ON DUPLICATE KEY UPDATE
            Student_FirstName = VALUES(Student_FirstName),
            Student_LastName = VALUES(Student_LastName),
            Student_City = VALUES(Student_City),
            Student_Grade = VALUES(Student_Grade)
    `;

    const values = [
        [101, 'Alex', 'Ortega', 'CDMX', '8'],
        [103, 'Chintu', 'Prakash', 'Chennai', '6'],
        [107, 'Caral', 'Smith', 'Texas', '2'],
        [109, 'Riya', 'Gupta', 'Pune', '9'],
        [102, 'Teka', 'Prashant', 'Bangalore', '8']
    ];

    // Execute the query
    connection.query(sql, [values], (err, result) => {
        if (err) throw err;

        console.log(`Inserted/Updated ${result.affectedRows} rows successfully`);

        connection.end();
    });
});
