const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({ dest: './upload' })

app.get('/api/customers', (req, res) => {

    connection.query(
        "SELECT * FROM customer",
        (err, rows, fieds) => {
            res.send(rows);
        }
    );

});

app.use('/imge', express.static('./upload'));

app.post('/api/customers', upload.single('imge'), (req, res) => {
    let sql = 'insert info customer values (null, ?,?,?,?,?)';
    let imge = '/imge/' + req.file.fileName;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [imge, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));