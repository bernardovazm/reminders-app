const db = require("../db/database");

class Reminder {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  save(callback) {
    const sql = "INSERT INTO reminders (name, date) VALUES (?, ?)";
    db.run(sql, [this.name, this.date], function (err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID, name: this.name, date: this.date });
    });
  }

  static getAll(callback) {
    const sql = "SELECT * FROM reminders ORDER BY date";
    db.all(sql, [], (err, rows) => {
      if (err) return callback(err);
      callback(null, rows);
    });
  }

  static delete(id, callback) {
    const sql = "DELETE FROM reminders WHERE id = ?";
    db.run(sql, [id], function (err) {
      if (err) return callback(err);
      callback(null);
    });
  }
}

module.exports = Reminder;
