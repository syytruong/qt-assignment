const db = require('./db');

const CertificateModel = {
    create: async (data) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO certificates (name, issuer, dateIssued) VALUES (?, ?, ?)`;
    
            db.run(query, [data.name, data.issuer, data.dateIssued], function(err) {
                if (err) {
                    reject(err);
                } else {
                    // this.lastID is a property of the SQLite run function's callback context
                    // which gives us the last inserted row ID
                    resolve({ id: this.lastID });
                }
            });
        });
    },
    findAll: async () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM certificates", [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });    
    },
    delete: async (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM certificates WHERE id = ?`, id, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ deleted: this.changes });
                }
            });
        });
    }
};

module.exports = CertificateModel;
