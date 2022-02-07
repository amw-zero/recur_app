const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./recur.db');

db.run("CREATE TABLE recurring_transactions(id INTEGER PRIMARY KEY, name VARCHAR(255), amount DECIMAL(10, 2), recurrence_rule VARCHAR(255))");
