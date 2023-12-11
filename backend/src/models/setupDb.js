const db = require('./db');

db.run(`CREATE TABLE IF NOT EXISTS certificates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    issuer TEXT NOT NULL,
    dateIssued TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Created the certificates table.');
    }
});
