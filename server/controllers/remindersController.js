const Reminder = require("../models/reminder");

exports.addReminder = (req, res) => {
  const { name, date } = req.body;
  if (!name || !date || new Date(date) <= new Date()) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const newReminder = new Reminder(name, date);
  newReminder.save((err, reminder) => {
    if (err) return res.status(500).json({ error: "Failed to add reminder" });
    res.status(201).json(reminder);
  });
};

exports.getReminders = (req, res) => {
  Reminder.getAll((err, reminders) => {
    if (err)
      return res.status(500).json({ error: "Failed to fetch reminders" });
    res.status(200).json(reminders);
  });
};

exports.deleteReminder = (req, res) => {
  const { id } = req.params;
  Reminder.delete(id, (err) => {
    if (err)
      return res.status(500).json({ error: "Failed to delete reminder" });
    res.status(200).json({ message: "Reminder deleted" });
  });
};
