const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const conection = mysql.createConnection(config);

let tagsli = "";
conection.query(`INSERT INTO people(name) values('Willyam Almeida')`);
conection.query('SELECT id, name FROM people', (err, rows) => {
    if (err) throw err;

    rows.forEach(row => {        
        tagsli += "<li>" + row.id + " - " + row.name + "</li>";
    });
});

conection.end();

app.get('/', (req, res) => {          
    console.log("Peoples: " + tagsli);
    res.send(`<h1>Full Cycle Rocks!</h1><hr><ul>`+ tagsli + `</ul>`);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});