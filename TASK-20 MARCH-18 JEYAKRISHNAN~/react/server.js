const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
const port = 5001;

app.use(cors())

// MySQL Connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '20F225',
    database: 'student'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Release the connection
    connection.release();
});

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/students', (req, res) => {
    const { name, rollno, department, dob } = req.body;
    console.log(name, rollno, department, dob);
    const sql = `INSERT INTO info (name, rollno, department, dob) VALUES (?, ?, ?, ?)`;
    pool.query(sql, [name, rollno, department, dob], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        console.log('Data inserted:', result);
        res.send('Data inserted');
    });
});

app.get('/api/students', (req, res) => {
    pool.query('SELECT * FROM info', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
